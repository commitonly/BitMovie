package data.repository.movie;

import data.domain.movie.JoinMovie;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface JoinMovieRepository {

    public List<JoinMovie> selectMovieList(Map<String, String> map);

}
