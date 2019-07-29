package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Diaries;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * DiaryRepository
 */
@Repository
public interface DiariesRepository extends JpaRepository<Diaries, Long> {

    
    public boolean existsByDiaryDate(String diaryDate);
    public Diaries findByDiaryDate(String diaryDate);
}