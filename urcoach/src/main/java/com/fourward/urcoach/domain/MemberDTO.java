package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;

import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * memberDTO
 */
@Data
@Component
@Lazy
public class MemberDTO {

    private Long memberId, memberType, memberHeight, memberWeight;
    private String memberEmail, memberName, memberPhoto;
    
}