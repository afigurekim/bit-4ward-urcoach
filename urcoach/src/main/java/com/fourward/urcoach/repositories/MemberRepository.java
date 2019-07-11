package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * MemberRepository
 */
@Repository
public interface MemberRepository extends JpaRepository<Member, Long>{

    
}