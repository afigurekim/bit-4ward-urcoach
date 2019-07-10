package com.fourward.urcoach.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * member
 */

@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@ToString
@Table(name = "member")
public class Member implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "member_id") private String memberId;
    @Column(name = "member_type") private String memberType;
    @Column(name = "member_name") private String memberName;
    @Column(name = "member_height") private String memberHeight;
    @Column(name = "member_weight") private String memberWeight;
    @Column(name = "member_photo") private String memberPhoto;
    
    @Builder
    private Member(String memberId, String memberType, String memberName, String memberHeight, String memberWeight, String memberPhoto){

        this.memberId = memberId;
        this.memberType = memberType;
        this.memberName = memberName;
        this.memberHeight = memberHeight;
        this.memberWeight = memberWeight;
        this.memberPhoto = memberPhoto;
    }
}