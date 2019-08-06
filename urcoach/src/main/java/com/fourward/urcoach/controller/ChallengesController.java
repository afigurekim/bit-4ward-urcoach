package com.fourward.urcoach.controller;

import java.util.HashMap;

import com.fourward.urcoach.entities.Challenges;
import com.fourward.urcoach.repositories.ChallengesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * ChallengeController
 */

@RestController
@RequestMapping("challenge")
public class ChallengesController {
    
    @Autowired private ChallengesRepository chRepo;

    //챌린지 이름 내용 넣기
    @PostMapping("/insert")
    public HashMap<String ,String > inputChallenge(@RequestBody Challenges challenges,
                                                    @RequestParam("coachId") long coachId){

        HashMap <String ,String > map = new HashMap<>();                          
        
        chRepo.save(challenges);
        
        map.put("result" ,"Challenge inputSuccess");
        return map;
    }
}