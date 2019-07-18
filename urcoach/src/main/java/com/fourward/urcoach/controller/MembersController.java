package com.fourward.urcoach.controller;

import java.util.HashMap;
import java.util.function.Supplier;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import com.fourward.urcoach.entities.Members;
import com.fourward.urcoach.repositories.MembersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * HomeController
 */
@RestController
@RequestMapping("/member")
public class MembersController {

    @Autowired private MembersRepository repo;

    //회원가입 local
    @PostMapping("/signup")
    public HashMap<String, String> signUp(@RequestBody Members members){
        HashMap<String ,String> map = new HashMap<>();
        repo.save(members);
        map.put("result","회원가입 성공");
        return map;
    }

    //로그인 하기
    @PostMapping("/find")
    public Members login(@RequestBody Members members){
        System.out.println("로그인 컨트롤러 : " + members.getMemberEmail() + members.getMemberPw());

        Supplier<Members> fx = (() -> {
            return repo.findByMemberEmailAndMemberPw(members.getMemberEmail(), members.getMemberPw());
        });
        System.out.println("로그인 확인 :" + (Members)fx.get());
        return (Members) fx.get();
    }

    //회원에 id 따른 정보 가져오기
    @GetMapping("/find/{id}")
    public Members findById(@PathVariable Long id){
        System.out.println("findById " + id);

        Members members = repo.findById(id)
                                .orElseThrow(EntityNotFoundException::new);
        System.out.println("id 회원정보 : "+ members);
        return members;
    }

    // 회원 정보 수정
    // @PutMapping("/update/{id}")
    // @Transactional
    // public HashMap<String, String> update(@PathVariable Long id, @RequestBody Members members) {
    //     HashMap<String ,String> map = new HashMap<>();

    //     // 아이디 찾고 --> 해당 정보 수정
    //     members = repo.findById((id)).get();
    // //    if(members != members.to)
        


    //     map.put("result", "update success");
    //     return map;
    // }
    





}