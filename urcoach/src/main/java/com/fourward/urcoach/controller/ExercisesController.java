package com.fourward.urcoach.controller;

import java.util.HashMap;
import java.util.List;

import com.fourward.urcoach.entities.Challenges;
import com.fourward.urcoach.entities.Exercises;
import com.fourward.urcoach.repositories.ExercisesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
                                                @RequestParam ("challengeId") Challenges challengeId){

        HashMap<String ,String > map = new HashMap<>();

        System.out.println("challengeId : " + challengeId);
        System.out.println("exercises.getChallengeId : "+ exercises.getChallengeId());
        exercises.setChallengeId(challengeId);
        System.out.println("challengeId : " + exercises.getChallengeId());
        exRepo.save(exercises);

        map.put("result" , "Exercise Success");
        return map;
    }

    //운동 포함 다 출력
    @GetMapping("/selectAll")
    public List<Exercises> selectExercise(){

        return exRepo.findAll();
    }

    // 
}