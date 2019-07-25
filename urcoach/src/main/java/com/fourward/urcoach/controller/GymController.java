package com.fourward.urcoach.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.PersistenceContext;

import com.fourward.urcoach.entities.Gyms;
import com.fourward.urcoach.entities.QGyms;
import com.fourward.urcoach.repositories.GymsRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


/**
 * GymController
 */

 @CrossOrigin(origins = "http://localhost:3000")
 @RestController
 @RequestMapping("/gyms")
public class GymController {
    @Autowired GymsRepository repo;
    @PersistenceContext
    EntityManager entity;


    @PostMapping("/insert")
    public HashMap <String,String> insertForm(@RequestBody Gyms gyms){
        HashMap <String,String> map = new HashMap<>();
        repo.save(gyms);
        map.put("result","insert sucess");
        return map;
    }

    @GetMapping("/find/{gymId}")
    public Gyms findByGymsId(@PathVariable Long gymId){
        Gyms gyms = repo.findById(gymId).orElseThrow(EntityNotFoundException::new);
        return gyms;
    }

    // @GetMapping("/find")
    // public Iterable <Gyms> findAll(){
    //     Iterable <Gyms> gyms = repo.findAll();
    //     List<Gyms> list = new ArrayList<>();
    //     return list;
    // }

    @GetMapping("/find")
    public List<Gyms> findAll(){
        List<Gyms> list = repo.findAll();
        return list;
    }
    
    @GetMapping("update/{gymId}")
    public HashMap <String,String> update(@PathVariable Long gymId, @RequestBody Gyms gyms){
        HashMap<String,String> map = new HashMap<>();
        Gyms oldGyms = repo.findById((gymId)).get();
        oldGyms.setGymName(gyms.getGymName());
        oldGyms.setGymInfo(gyms.getGymInfo());
        oldGyms.setGymTime(gyms.getGymTime());
        oldGyms.setGymLoc(gyms.getGymLoc());
        oldGyms.setGymPhoto(gyms.getGymPhoto());
        repo.save(oldGyms);
        map.put("result", "update sucess");
        return map;
    }
            
    @DeleteMapping("/{gymId}")
    public void deleteById(@PathVariable Long gymId){
        repo.deleteById(gymId);
    }

    
    @GetMapping("/search/{keyword}")
    public List<Gyms> search(@PathVariable String keyword){
       
        System.out.println(keyword);

        QGyms gyms = QGyms.gyms;
        // Gyms gyms2 = new Gyms();

        BooleanBuilder builder = new BooleanBuilder();
        JPAQueryFactory query = new JPAQueryFactory(entity);
        
        List<Gyms> list = new ArrayList<>();
      
         // 동적
         // builder.and(gyms.gymId.eq(1L).and(gyms.gymLoc.eq("keyword")));
         // builder.and(gyms.gymLoc.like("%"+ keyword+"%"));
         // builder.and(gyms.gymId.eq(0L).and(gyms.gymLoc.like("%"+ keyword+"%")));
            builder.and(gyms.gymId.gt(0L).and(gyms.gymLoc.like("%"+ keyword+"%")));

          query.from(gyms)
                .where(builder)
                .fetch().forEach(obj -> list.add((Gyms)obj));

                System.out.println(list.toString());
                
    return list;

        // // 정적
        // query.from(gyms)
        //     .where(gyms.gymId.eq(5L).and(gyms.gymName.eq("asdf")))
        //     .fetch()
        //     .forEach(arr -> list.add(arr));
    }
}