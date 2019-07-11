package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Diary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * DiaryRepository
 */
@Repository
public interface DiaryRepository extends JpaRepository<Diary, Long>{

    
}