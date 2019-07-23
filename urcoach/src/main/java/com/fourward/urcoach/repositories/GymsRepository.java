package com.fourward.urcoach.repositories;


import com.fourward.urcoach.entities.Gyms;
import com.fourward.urcoach.entities.QGyms;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

/**
 * GymRepository
 */
@Repository
public interface GymsRepository extends JpaRepository<Gyms, Long>, QuerydslPredicateExecutor<Gyms> {
    
    public default Predicate makePredicate(String type, String keyword){
        BooleanBuilder builder = new BooleanBuilder();

        QGyms gyms = QGyms.gyms;

        // builder.and(gyms.)
         
    }
}