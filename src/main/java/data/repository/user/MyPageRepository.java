package data.repository.user;

import data.domain.user.MyPage;
import data.domain.user.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MyPageRepository {

    public List<MyPage> selectBooking (int user_pk); //마이페이지 예매 목록 조회
    public List<MyPage> selectMovieLog (int user_pk); //마이페이지 무비로그 조회
    public String selectPhotoName (User user); //사진 파일명 조회
    public void updateUserPhoto (User user); //프로필사진 업로드
}
