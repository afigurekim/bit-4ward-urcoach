package com.fourward.urcoach.entities;



import java.io.Serializable;

import javax.persistence.*;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Coach
 */

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Getter
@Setter
@ToString
@Table (name = "coaches")
public class Coach implements Serializable {
    
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long coachId;

    @Column(name="coach_loc") private String coachLoc;
    @Column(name="coach_info") private String coachInfo;
    @Column(name="coach_link") private String coachLink;
    @Column(name="coach_resume_1") private String coachResume1;
    @Column(name="coach_resume_2") private String coachResume2;
    @Column(name="coach_resume_3") private String coachResume3;
    @Column(name="coach_resume_4") private String coachResume4;
    @Column(name="coach_resume_5") private String coachResume5;

    @JoinColumn(name = "member_id") private Member memberId;
    @JoinColumn(name = "member_name") private Member memberName;
    @JoinColumn(name = "member_photo") private Member memberPhoto;

    @Builder
    public Coach(Long coachId,  String coachLoc, String coachInfo,
            String coachLink, String coachResume1, String coachResume2, String coachResume3,String coachResume4,String coachResume5) {
        this.coachId = coachId;
        this.coachLoc = coachLoc;
        this.coachInfo = coachInfo;
        this.coachLink = coachLink;
        this.coachResume1 = coachResume1;
        this.coachResume2 = coachResume2;
        this.coachResume3 = coachResume3;
        this.coachResume4 = coachResume4;
        this.coachResume5 = coachResume5;
    }
}