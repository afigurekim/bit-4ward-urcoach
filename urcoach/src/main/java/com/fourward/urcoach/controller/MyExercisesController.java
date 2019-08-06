package com.fourward.urcoach.controller;

import java.util.HashMap;
<<<<<<< HEAD
import java.util.List;
import java.util.Optional;

import com.fourward.urcoach.entities.Exercises;
import com.fourward.urcoach.entities.Members;
import com.fourward.urcoach.entities.MyChallenges;
=======
import java.util.Optional;

>>>>>>> DH
import com.fourward.urcoach.entities.MyExercises;
import com.fourward.urcoach.repositories.MyExercisesRepository;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.CrossOrigin;
=======
>>>>>>> DH
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
<<<<<<< HEAD
@CrossOrigin(origins = "http://localhost:3000")
=======
>>>>>>> DH
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
<<<<<<< HEAD
        repo.save(tempMem);
        map.put("RESULT", "멤버 운동 수정 성공");
        return map;
    }

    @PutMapping("/update2/{myExerciseId}")
    public HashMap<String, String> updateMyExercise2(@PathVariable String myExerciseId, @RequestBody MyExercises myExercise){
        HashMap<String, String> map = new HashMap<>();
        MyExercises tempMem = new MyExercises();
        Optional<MyExercises> optMem = repo.findById(Long.parseLong(myExerciseId));
        if(optMem.isPresent()){
            tempMem = optMem.get();
        }
        // tempMem.setExerciseId(myExercise.getExerciseId());
        tempMem.setMyExerciseSet(myExercise.getMyExerciseSet());
        tempMem.setMyExerciseCount(myExercise.getMyExerciseCount());
        tempMem.setMyExerciseTime(myExercise.getMyExerciseTime());
        tempMem.setMyExerciseCal(myExercise.getMyExerciseCal());
        tempMem.setMyExerciseComplete(myExercise.getMyExerciseComplete());
        tempMem.setMyExerciseDate(myExercise.getMyExerciseDate());

=======
        tempMem.setMyExerciseOrder(myExercise.getMyExerciseOrder());
>>>>>>> DH
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
<<<<<<< HEAD

    // 커스터마이징 운동 루틴 저장
    // @PostMapping("/insert")
    // public HashMap<String,String> insertMemEx(@RequestBody MyExercises myExercises,
    //                                          @RequestParam("memberId")Members memberId,
    //                                          @RequestParam("exerciseId") Exercises exerciseId){
    //     HashMap<String,String> map = new HashMap<>();

    //     myExercises.setMemberId(memberId);
    //     myExercises.setExerciseId(exerciseId);
    //     repo.save(myExercises);

    //     map.put("result","memEx insert success");
    //     return map;
    // }

    // PathVariable 로 값 저장하기
    @PostMapping("/insert/{memberId}/{exerciseId}/{myChallengeId}")
    public HashMap<String,String> insertMemEx(@RequestBody MyExercises myExercises,
                                             @PathVariable Members memberId,
                                             @PathVariable Exercises exerciseId,
                                             @PathVariable MyChallenges myChallengeId){
        HashMap<String,String> map = new HashMap<>();

        myExercises.setMyChallengeId(myChallengeId);
        myExercises.setMemberId(memberId);
        myExercises.setExerciseId(exerciseId);
        repo.save(myExercises);

        map.put("result","memEx insert success");
        return map;
    }

     // PathVariable 로 값 저장하기
     @PostMapping("/insert2/{memberId}/{exerciseId}")
     public HashMap<String,String> insertMemEx2(@RequestBody MyExercises myExercises,
                                              @PathVariable Members memberId,
                                              @PathVariable Exercises exerciseId){

        System.out.println("insert2 접근");
         HashMap<String,String> map = new HashMap<>();
 
         myExercises.setMemberId(memberId);
         myExercises.setExerciseId(exerciseId);
         repo.save(myExercises);
 
         map.put("result","memEx insert success");
         return map;
     }

    // findByMyChallengeId 
    @GetMapping("/findbymychallengeid/{myChallengeId}")
    public List<MyExercises> findByMyChallengeId(@PathVariable MyChallenges myChallengeId){
        System.out.println("myChallengeId : " + myChallengeId);
        return repo.findByMyChallengeId(myChallengeId);
    }
=======
>>>>>>> DH
}