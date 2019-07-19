package com.fourward.urcoach.controller;

import java.util.HashMap;
import java.util.Optional;

import com.fourward.urcoach.entities.MemExercises;
import com.fourward.urcoach.repositories.MemExercisesRepository;

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
 * MemExercisesController
 */
@RestController
@RequestMapping("/memexercise")
public class MemExercisesController {

    @Autowired private MemExercisesRepository repo;

    @PostMapping("")
    public HashMap<String, String> postMemExercise(@RequestBody MemExercises memexercise){
        HashMap<String, String> map = new HashMap<>();
        repo.save(memexercise);
        map.put("RESULT", "멤버 운동 등록 성공");
        return map;
    }

    @GetMapping("/find/{memExerciseDate}")
    public Iterable<MemExercises> findByMemExerciseDate(@PathVariable String memExerciseDate){
        return repo.findByMemExerciseDate(memExerciseDate);
    }

    @PutMapping("/update/{memExcerciseId}")
    public HashMap<String, String> updateMemExercise(@PathVariable String memExcerciseId, @RequestBody MemExercises memexercise){
        HashMap<String, String> map = new HashMap<>();
        MemExercises tempMem = new MemExercises();
        Optional<MemExercises> optMem = repo.findById(Long.parseLong(memExcerciseId));
        if(optMem.isPresent()){
            tempMem = optMem.get();
        }
        tempMem.setExerciseId(memexercise.getExerciseId());
        tempMem.setMemExerciseSet(memexercise.getMemExerciseSet());
        tempMem.setMemExerciseCount(memexercise.getMemExerciseCount());
        tempMem.setMemExerciseTime(memexercise.getMemExerciseTime());
        tempMem.setMemExerciseCal(memexercise.getMemExerciseCal());
        tempMem.setMemExerciseComplete(memexercise.getMemExerciseComplete());
        repo.save(tempMem);
        map.put("RESULT", "멤버 운동 수정 성공");
        return map;
    }

    @DeleteMapping("/delete/{memExcerciseId}")
    public HashMap<String, String> deleteMemExercise(@PathVariable String memExcerciseId){
        HashMap<String, String> map = new HashMap<>();
        repo.deleteById(Long.parseLong(memExcerciseId));
        map.put("RESULT", "멤버 운동 삭제 성공");
        return map;
    }
}