package com.devsuperior.dscatalog.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dscatalog.entities.Category;
import com.devsuperior.dscatalog.repositories.CategoryReporitory;

@Service
public class CategoryService {

	@Autowired
	private CategoryReporitory repository;
	
	public List<Category> findAll() {
		return repository.findAll();
	}
}
