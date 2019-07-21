package com.fourward.urcoach.controller;

import java.util.HashMap;
import java.util.List;

import com.fourward.urcoach.entities.MemChallenges;
import com.fourward.urcoach.entities.Members;
import com.fourward.urcoach.repositories.MemChallengesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * MemChallengesController
 */
@RestController
@RequestMapping("/memchallenges")
public class MemChallengesController {

    @Autowired MemChallengesRepository memChallRepo;

    // 커스터마이징한 챌린지 값 넣기
    @PostMapping("/insert")
    public HashMap<String, String> insertMemChallenges(@RequestBody MemChallenges memChallenges){
        HashMap<String, String> map = new HashMap<>();

        memChallRepo.save(memChallenges);

        map.put("result", "success");
        return map;
    }
    
    // memberId 별로 가져오기
    @GetMapping("/findbymemberid")
    public List<MemChallenges> findByMemberId(@RequestParam("memberId") Members memberId){

        return memChallRepo.findAll();
    }
    
}