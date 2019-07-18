package com.fourward.urcoach.controller;

import java.util.HashMap;

import com.fourward.urcoach.entities.Coaches;
import com.fourward.urcoach.entities.Members;
import com.fourward.urcoach.repositories.CoachesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * CoachController
 */
@RestController
@RequestMapping("/coach")
public class CoachesController {

    @Autowired private CoachesRepository coaRepo;

    @PostMapping("/insert")
    public HashMap<String ,String> insertCoach(@RequestBody Coaches coaches,
                                                @RequestParam("memberId") Members memberId) {
        System.out.println("coach insert 진입 : " + coaches);
        HashMap<String,String> map = new HashMap<>();

        coaches.setMemberId(memberId);
        coaRepo.save(coaches);
        map.put("result", "Coach insert Success");
        return map;
    }
}