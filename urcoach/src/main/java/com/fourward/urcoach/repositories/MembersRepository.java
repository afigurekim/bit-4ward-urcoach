package com.fourward.urcoach.repositories;

<<<<<<< HEAD

<<<<<<< HEAD
=======
import java.util.Optional;
>>>>>>> origin/YJ
=======
>>>>>>> DH

import com.fourward.urcoach.entities.Members;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * MemberRepository
 */
@Repository
public interface MembersRepository extends JpaRepository<Members, Long> {

    //email 로그인
    public Optional<Members> findByMemberEmailAndMemberPw(String email, String pw);

    
}