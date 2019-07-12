package com.fourward.urcoach.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.springframework.stereotype.Component;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * member
 */

@Component
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@ToString
@Table(name = "Members")
public class Members implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id") private Long memberId;
    @Column(name = "member_type") private Integer memberType;
    @Column(name = "member_email") private String memberEmail;
    @Column(name = "member_pw") private String memberPw;
    @Column(name = "member_name") private String memberName;
    @Column(name = "member_height") private String memberHeight;
    @Column(name = "member_weight") private String memberWeight;
    @Column(name = "member_photo") private String memberPhoto;
    
    @OneToMany(mappedBy = "members")
    @Cascade(CascadeType.DELETE)
    private List<Reports> reports = new ArrayList<>();

    @OneToMany(mappedBy = "members")
    @Cascade(CascadeType.DELETE)
    private List<Meals> meals = new ArrayList<>();

    @OneToMany(mappedBy = "members")
    @Cascade(CascadeType.DELETE)
    private List<Diaries> diaries = new ArrayList<>();

    @OneToMany(mappedBy = "members")
    @Cascade(CascadeType.DELETE)
    private List<Coaches> coaches = new ArrayList<>();
  
    @OneToMany(mappedBy = "members")
    @Cascade(CascadeType.DELETE)
    private List<MemExercises> memExercises = new ArrayList<>();
    
    @Builder
    private Members(String memberEmail, String memberPw, Integer memberType, String memberName, String memberHeight, String memberWeight, String memberPhoto){

        this.memberEmail = memberEmail;
        this.memberPw = memberPw;
        this.memberType = memberType;
        this.memberName = memberName;
        this.memberHeight = memberHeight;
        this.memberWeight = memberWeight;
        this.memberPhoto = memberPhoto;
    }
}