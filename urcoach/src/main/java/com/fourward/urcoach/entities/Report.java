package com.fourward.urcoach.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Report
 */
@Entity
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Table(name = "report")
public class Report {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long reportId;
    private String reportDate;
    private String reportCalOut;
    private String reportCalIn;

    @ManyToOne
    @JoinColumn(name = "member_id") private Member memberId;

    @Builder
    private Report(String reportDate, String reportCalOut, String reportCalIn){

        this.reportDate = reportDate;
        this.reportCalOut = reportCalOut;
        this.reportCalIn = reportCalIn;
    } 
}