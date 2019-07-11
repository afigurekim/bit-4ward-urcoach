package com.fourward.urcoach.repositories;

import com.fourward.urcoach.entities.Report;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ReportRepository
 */
@Repository
public interface ReportRepository extends JpaRepository<Report, Long>{

    
}