package com.fourward.urcoach.controller;

import java.util.HashMap;

import com.fourward.urcoach.entities.Exercises;
import com.fourward.urcoach.entities.MemExercises;
import com.fourward.urcoach.entities.Members;
import com.fourward.urcoach.repositories.MemExercisesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/memexercises")
public class MemExercisesController {

    @Autowired private MemExercisesRepository memExRepo;

    // 커스터마이징 운동 루틴 저장
    @PostMapping("/insert")
    public HashMap<String,String> insertMemEx(@RequestBody MemExercises memExercises,
                                             @RequestParam("memberId")Members memberId,
                                             @RequestParam("exerciseId") Exercises exerciseId){
        HashMap<String,String> map = new HashMap<>();

        memExercises.setMemberId(memberId);
        memExercises.setExerciseId(exerciseId);
        memExRepo.save(memExercises);

        map.put("result","memEx insert success");
        return map;
    }

    // 수정
    // @PutMapping("/update/{}")
    // public HashMap<String, String> updateMemExercise(@RequestBody MemExercises memExercises,
    //     @RequestParam ){
    //         //필요한 거 
    // }

    
    
}