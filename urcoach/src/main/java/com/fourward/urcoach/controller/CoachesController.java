package com.fourward.urcoach.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.fourward.urcoach.entities.Coaches;
import com.fourward.urcoach.repositories.CoachesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;





 @CrossOrigin(origins = "",maxAge = 3600)
 @RestController
 @RequestMapping("/coaches")
public class CoachesController {
    @Autowired CoachesRepository repo;

    //C:코치정보 입력
    @PostMapping("")
    public HashMap<String,String> insertForm(@RequestBody Coaches coaches){
        HashMap<String,String> map = new HashMap<>();
        repo.save(coaches);
        map.put("result","입력 성공");
        return map;
    }

    //R(1)
    @GetMapping()
    public Coaches findByCoachesId(@PathVariable Long id){
        Coaches coaches = repo.findById(id).orElseThrow(EntityNotFoundException::new);
        return coaches;
    }

    //R(2)
    @GetMapping()
    public Iterable<Coaches> findAll(){
        Iterable<Coaches> entities = repo.findAll();

        List<Coaches> list = new ArrayList<>();
        return list;

    }





  
    }
    

    
    
