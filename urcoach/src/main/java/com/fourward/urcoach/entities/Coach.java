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
    private Long id;

    @Column(name="coach_id") private String coachId;
    @Column(name="coach_name") private String coachName;
    @Column(name="password") private String password;
    @Column(name="coach_loc") private String coachLoc;
    @Column(name="coach_info") private String coachInfo;
    @Column(name="coach_link") private String coachLink;
    @Column(name="coach_resume_1") private String coachResume1;
    @Column(name="coach_resume_2") private String coachResume2;
    @Column(name="coach_resume_3") private String coachResume3;
    @Column(name="photo") private String photo;

    
      @Override
    public String toString() {
        return "Coach [coachId=" + coachId + ", coachInfo=" + coachInfo + ", coachLink=" + coachLink + ", coachLoc="
                + coachLoc + ", coachResume1=" + coachResume1 + ", coachResume2=" + coachResume2 + ", coachResume3="
                + coachResume3 + ", coachName=" + coachName + ", id=" + id + ", password=" + password + ", photo="
                + photo + "]";
    }

    @Builder
    public Coach(Long id, String coachId, String coachName, String password, String coachLoc, String coachInfo,
            String coachLink, String coachResume1, String coachResume2, String coachResume3, String photo) {
        this.id = id;
        this.coachId = coachId;
        this.coachName = coachName;
        this.password = password;
        this.coachLoc = coachLoc;
        this.coachInfo = coachInfo;
        this.coachLink = coachLink;
        this.coachResume1 = coachResume1;
        this.coachResume2 = coachResume2;
        this.coachResume3 = coachResume3;
        this.photo = photo;
    }



    
}