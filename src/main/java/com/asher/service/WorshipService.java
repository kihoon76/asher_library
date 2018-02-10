package com.asher.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.asher.dao.WorshipDao;
import com.asher.domain.Bible;

@Service("worshipService")
public class WorshipService {

	@Resource(name="worshipDao")
	WorshipDao worshipDao;
	
	
	public List<Bible> getBibleLabel() {
		return worshipDao.selectBibleLabel();
	}

}
