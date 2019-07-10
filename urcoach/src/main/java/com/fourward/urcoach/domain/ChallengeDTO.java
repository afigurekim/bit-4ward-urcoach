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
public class ChallengeDTO {

    private Long id;
    private String challengeName;
    
}