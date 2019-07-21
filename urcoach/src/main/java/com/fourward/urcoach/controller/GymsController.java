package com.fourward.urcoach.controller;

import java.util.HashMap;
import java.util.List;

import com.fourward.urcoach.entities.Gyms;
import com.fourward.urcoach.repositories.GymsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


/**
 * GymsController
 */
@RestController
@RequestMapping("/gyms")
public class GymsController {

    @Autowired private GymsRepository gymsRepo;

    //gyms 등록
    @PostMapping("/insert")
    public HashMap<String, String> insertGym(@RequestBody Gyms gyms){
        HashMap<String, String> map = new HashMap<>();

        gymsRepo.save(gyms);

        map.put("result","Gym insert success");
        return map;
    }

    //gym 모두 읽기
    @GetMapping("/selectAll")
    public List<Gyms> gymsSelectAll() {
        return gymsRepo.findAll();
    }

}