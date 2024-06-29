package com.FirstProject.EmsBackend.repository;

import com.FirstProject.EmsBackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
