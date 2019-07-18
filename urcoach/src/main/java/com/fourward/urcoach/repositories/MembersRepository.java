package com.fourward.urcoach.repositories;



import com.fourward.urcoach.entities.Members;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * MemberRepository
 */
@Repository
public interface MembersRepository extends JpaRepository<Members, Long> {

    //email 로그인
    public Members findByMemberEmailAndMemberPw(String email, String pw);

    // 회원정보수정
    // @Modifying
    // @Query("update members set member_name = :memberName, member_pw = :memberPw WHERE member_email= :memberEmail")
    // public Members updateMember(Long id, Members members );

    
}