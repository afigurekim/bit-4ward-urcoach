package com.fourward.urcoach.controller;

import java.util.HashMap;
import java.util.Optional;

import com.fourward.urcoach.entities.MyExercises;
import com.fourward.urcoach.repositories.MyExercisesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * MyExercisesController
 */
@RestController
@RequestMapping("/MyExercise")
public class MyExercisesController {

    @Autowired private MyExercisesRepository repo;

    @PostMapping("")
    public HashMap<String, String> postMyExercise(@RequestBody MyExercises myExercise){
        HashMap<String, String> map = new HashMap<>();
        repo.save(myExercise);
        map.put("RESULT", "멤버 운동 등록 성공");
        return map;
    }

    @GetMapping("/find/{myExerciseDate}")
    public Iterable<MyExercises> findByMyExerciseDate(@PathVariable String myExerciseDate){
        return repo.findByMyExerciseDate(myExerciseDate);
    }

    @PutMapping("/update/{myExerciseId}")
    public HashMap<String, String> updateMyExercise(@PathVariable String myExerciseId, @RequestBody MyExercises myExercise){
        HashMap<String, String> map = new HashMap<>();
        MyExercises tempMem = new MyExercises();
        Optional<MyExercises> optMem = repo.findById(Long.parseLong(myExerciseId));
        if(optMem.isPresent()){
            tempMem = optMem.get();
        }
        tempMem.setExerciseId(myExercise.getExerciseId());
        tempMem.setMyExerciseSet(myExercise.getMyExerciseSet());
        tempMem.setMyExerciseCount(myExercise.getMyExerciseCount());
        tempMem.setMyExerciseTime(myExercise.getMyExerciseTime());
        tempMem.setMyExerciseCal(myExercise.getMyExerciseCal());
        tempMem.setMyExerciseComplete(myExercise.getMyExerciseComplete());
        tempMem.setMyExerciseOrder(myExercise.getMyExerciseOrder());
        repo.save(tempMem);
        map.put("RESULT", "멤버 운동 수정 성공");
        return map;
    }

    @DeleteMapping("/delete/{myExerciseId}")
    public HashMap<String, String> deleteMyExercise(@PathVariable String myExerciseId){
        HashMap<String, String> map = new HashMap<>();
        repo.deleteById(Long.parseLong(myExerciseId));
        map.put("RESULT", "멤버 운동 삭제 성공");
        return map;
    }
}