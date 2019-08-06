package com.fourward.urcoach.repositories;
import java.util.List;

import com.fourward.urcoach.entities.Coaches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * CoachRepository
 */

@Repository
public interface CoachesRepository extends JpaRepository<Coaches, Long> {
   
  
}