package data.repository.user;

import data.domain.user.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
    public User selectUser(int user_pk); //마이페이지 유저 정보 출력
    public void updateUser(User user); //마이페이지 회원 정보 수정
    public int searchId(String u_id); //회원가입 아이디 중복 체크
    public void insertUser(User user); //회원가입
    public int selectNickname(String u_nick); //중복 닉네임 확인
    public String selectPass(User user); //비밀번호 변경할 때 아이디 참조해서 기존 비밀번호 가져오기(기존 비밀번호와 일치하면 비밀번호 변경불가)
    public void updatePass(User user); //비밀번호 변경
    public void deleteUser(String u_id); //회원 삭제 (상태 변경)
    public String selectFindId(String u_phone); //아이디 찾기
    public String selectFindPass(User user); //비밀번호 찾기 (아이디, 핸드폰 번호 확인)
    public int selectCheckPhone(String u_phone); //전화번호 중복 확인
    public int selectCheckInfo(User user); //입력한 아이디와 전화번호로 일치하는 계정 있는지 확인

}
