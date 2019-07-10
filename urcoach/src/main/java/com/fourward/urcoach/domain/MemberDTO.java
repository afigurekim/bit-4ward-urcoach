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

    private Long Id, memberType;
    private String memberId, memberName, memberHeight, memberWeight, memberPhoto;
    
}