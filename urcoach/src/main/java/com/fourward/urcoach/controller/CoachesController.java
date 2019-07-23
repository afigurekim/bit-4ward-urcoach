package com.fourward.urcoach.controller;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.fourward.urcoach.entities.Coaches;
import com.fourward.urcoach.entities.Members;
import com.fourward.urcoach.repositories.CoachesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


 @CrossOrigin(origins = "http://localhost:3000")
 @RestController
 @RequestMapping("/coaches")
public class CoachesController {
    @Autowired CoachesRepository repo;

    // C
    @PostMapping("/insert")
    public HashMap<String,String> insertForm(@RequestBody Coaches coaches, @RequestParam Members memberId){
        HashMap <String,String> map = new HashMap<>();
        coaches.setMemberId(memberId);
        repo.save(coaches);
        map.put("result","입력 성공");
        return map;
    }

    // R(1)
    @GetMapping("/find/{id}")
    public Coaches findByCoachesId(@PathVariable Long id){
        Coaches coaches = repo.findById(id).orElseThrow(EntityNotFoundException::new);
        return coaches;
    }


    // //R(2):pagination
    // @GetMapping("/find")
    // public Iterable<Coaches> findAll(){
    //     Iterable<Coaches> coaches = repo.findAll();
    //     List<Coaches> list = new ArrayList<>();
    //     for(Coaches s: coaches){
    //         list.add(s);
    //     }
    //     return list;
    // }


    // R(2):pagination_DESC
    @GetMapping("/find")
    public List<Coaches> list(Sort sort){
        sort = sort.and(new Sort(Sort.Direction.DESC, "coachId"));
        List<Coaches> list = repo.findAll(sort);
        return list;
    }


    // U
    @PutMapping("/update/{id}")
        public HashMap<String,String> update(@PathVariable Long id, @RequestBody Coaches coaches){
            HashMap<String,String> map = new HashMap<>();
            Coaches oldCoaches = repo.findById(id).get();
            oldCoaches.setCoachInfo(coaches.getCoachInfo());
            oldCoaches.setCoachLink(coaches.getCoachLink());
            oldCoaches.setCoachLoc(coaches.getCoachLoc());
            oldCoaches.setCoachName(coaches.getCoachName());
            oldCoaches.setCoachPhoto1(coaches.getCoachPhoto1());
            oldCoaches.setCoachPhoto2(coaches.getCoachPhoto2());
            oldCoaches.setCoachResume1(coaches.getCoachResume1());
            oldCoaches.setCoachResume2(coaches.getCoachResume2());
            oldCoaches.setCoachResume3(coaches.getCoachResume3());
            oldCoaches.setCoachResume4(coaches.getCoachResume4());
            oldCoaches.setCoachResume5(coaches.getCoachResume5());
            repo.save(oldCoaches);
            map.put("result", "update sucess");
            return map;
        }

        // //D
        // @DeleteMapping("/{id}")
        // public void deleteById(@PathVariable Long id){
        //     Coaches coaches = repo.findById(id);
        //     repo.deleteById(coaches.getCoachId());
        // }

        }

    

    
    
