package com.fourward.urcoach.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Report
 */

@Component
@Entity
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Table(name = "Reports")
public class Reports {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "report_id") private Long reportId;
    @Column(name = "report_date") private String reportDate;
    @Column(name = "report_cal_out") private String reportCalOut;
    @Column(name = "report_cal_in") private String reportCalIn;

    @ManyToOne
    @JoinColumn(name = "member_id") private Members members;

    @Builder
    private Reports(String reportDate, String reportCalOut, String reportCalIn){

        this.reportDate = reportDate;
        this.reportCalOut = reportCalOut;
        this.reportCalIn = reportCalIn;
    } 
}