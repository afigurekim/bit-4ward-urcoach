package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Challenge;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ChallengeRepository
 */

@Repository
public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    
}