package com.asher.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.asher.domain.Bible;

@Repository("worshipDao")
public class WorshipDaoImpl implements WorshipDao {

	private static final String namespace = "mappers.worshipMapper";
	
	@Resource(name="sqlSession")
	SqlSession sqlSession;
	
	@Override
	public List<Bible> selectBibleLabel() {
		return sqlSession.selectList(namespace + ".selectBibleLabel");
	}

}
