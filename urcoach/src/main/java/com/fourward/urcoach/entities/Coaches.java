package com.fourward.urcoach.entities;



import java.io.Serializable;

import javax.persistence.*;

import org.springframework.stereotype.Component;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Coach
 */
@Component
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Getter
@Setter
@ToString
@Table (name = "Coaches")
public class Coaches implements Serializable {
    
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "coach_id") private Long coachId;

    @Column(name="coach_loc") private String coachLoc;
    @Column(name="coach_info") private String coachInfo;
    @Column(name="coach_link") private String coachLink;
    @Column(name="coach_photo") private String coachPhoto;
    @Column(name="coach_name") private String coachName;
    @Column(name="coach_resume_1") private String coachResume1;
    @Column(name="coach_resume_2") private String coachResume2;
    @Column(name="coach_resume_3") private String coachResume3;
    @Column(name="coach_resume_4") private String coachResume4;
    @Column(name="coach_resume_5") private String coachResume5;

    @ManyToOne
    @JoinColumn(name = "member_id") private Members members;

    @Builder
    public Coaches(Long coachId,  String coachLoc, String coachInfo, String coachPhoto, String coachName,
            String coachLink, String coachResume1, String coachResume2, String coachResume3,String coachResume4,String coachResume5) {
        this.coachId = coachId;
        this.coachLoc = coachLoc;
        this.coachInfo = coachInfo;
        this.coachLink = coachLink;
        this.coachPhoto = coachPhoto;
        this.coachName = coachName;
        this.coachResume1 = coachResume1;
        this.coachResume2 = coachResume2;
        this.coachResume3 = coachResume3;
        this.coachResume4 = coachResume4;
        this.coachResume5 = coachResume5;
    }
}