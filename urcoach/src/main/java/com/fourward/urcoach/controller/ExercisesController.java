package com.fourward.urcoach.controller;

import java.util.HashMap;

import com.fourward.urcoach.entities.Exercises;
import com.fourward.urcoach.repositories.ExercisesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * ExercisesController
 */
@RestController
@RequestMapping("/exercise")
public class ExercisesController {

    @Autowired private ExercisesRepository exRepo;

    //운동 루틴 데이터 입력
    @PostMapping("/input")
    public HashMap<String,String> insertExercise(@RequestBody Exercises exercises,
                                                @RequestParam ("challengeId") long challengeId){

        HashMap<String ,String > map = new HashMap<>();

        exRepo.save(exercises);

        map.put("result" , "Exercise Success");
        return map;
    }
}