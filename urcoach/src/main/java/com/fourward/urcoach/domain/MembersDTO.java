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
public class MembersDTO {

    private Integer memberType;
    private Long memberId;
    private String memberEmail, memberPw, memberName, memberPhoto, memberHeight, memberWeight;
}