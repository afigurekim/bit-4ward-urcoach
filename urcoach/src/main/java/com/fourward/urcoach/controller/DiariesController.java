package com.fourward.urcoach.controller;

import java.util.HashMap;

import com.fourward.urcoach.entities.Diaries;
import com.fourward.urcoach.repositories.DiariesRepository;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
=======
import org.springframework.web.bind.annotation.DeleteMapping;
>>>>>>> origin/YJ
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * DiariesController
 */
@RestController
@RequestMapping("/diary")
public class DiariesController {

    @Autowired private DiariesRepository repo;

    @PostMapping("")
    public HashMap<String, String> postDiary(@RequestBody Diaries diaries){
        HashMap<String, String> map = new HashMap<>();
        repo.save(diaries);
<<<<<<< HEAD
        map.put("result", "다이어리 등록 성공");
=======
        map.put("RESULT", "다이어리 등록 성공");
>>>>>>> origin/YJ
        return map;
    }

    @GetMapping("/exists/{diaryDate}")
    public String existsByDiaryDate(@PathVariable String diaryDate){
        String exist = "DayNew";
        if(repo.existsByDiaryDate(diaryDate)){
            exist = "DayView";
        };
        return exist;
    }

    @GetMapping("/find/{diaryDate}")
    public Diaries findByDiaryDate(@PathVariable String diaryDate){
        return repo.findByDiaryDate(diaryDate);
    }

    @PutMapping("/update/{diaryDate}")
    public HashMap<String, String> updateDiary(@PathVariable String diaryDate, @RequestBody Diaries diaries){
        HashMap<String, String> map = new HashMap<>();
<<<<<<< HEAD
        
        repo.save(diaries);
        map.put("result", "다이어리 수정 성공");
=======
        Diaries tempDiaries = repo.findByDiaryDate(diaryDate);
        tempDiaries.setDiaryDays(diaries.getDiaryDays());
        tempDiaries.setDiaryGoal(diaries.getDiaryGoal());
        tempDiaries.setDiaryMuscle(diaries.getDiaryMuscle());
        tempDiaries.setDiaryFat(diaries.getDiaryFat());
        tempDiaries.setDiaryWater(diaries.getDiaryWater());
        tempDiaries.setDiarySkeletal(diaries.getDiarySkeletal());
        tempDiaries.setDiaryComment(diaries.getDiaryComment());
        tempDiaries.setDiaryPhoto(diaries.getDiaryPhoto());
        repo.save(tempDiaries);
        map.put("RESULT", "다이어리 수정 성공");
        return map;
    }

    @DeleteMapping("/delete/{diaryId}")
    public HashMap<String, String> deleteByDiaryId(@PathVariable String diaryId){
        HashMap<String, String> map = new HashMap<>();
        repo.deleteById(Long.parseLong(diaryId));
        map.put("RESULT", "다이어리 삭제 성공");
>>>>>>> origin/YJ
        return map;
    }
}