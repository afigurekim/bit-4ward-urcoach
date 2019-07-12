package com.fourward.urcoach.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * challengeDTO
 */

@Data
@Component
@Lazy
public class ChallengesDTO {

    private Long challengeId;
    private String challengeName, ChallengeText, ChallengePhoto;
    
}