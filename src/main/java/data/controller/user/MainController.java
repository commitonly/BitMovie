package data.controller.user;

import data.domain.movie.JoinRevw;
import data.service.user.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/main")
public class MainController {

    private final MainService mainService;


    // 가장 최신 등록된 평점을 'count'갯수 만큼 반환
    @GetMapping("/selectRecentRevw")
    public List<JoinRevw> selectRecentRevw(@RequestParam(defaultValue = "10") int count) {
        List<JoinRevw> joinRevws = mainService.selectRecentRevw(count);
        System.out.println(joinRevws);
        return joinRevws;
    }

    // 검색 기능
    @GetMapping("search")
    public void search(String search){
        mainService.selectSearchData(search);
        // 1. 영화에서 해당 단어 감색

        // 2. 인물정보에서 해당 정보 검색

        // 3. 인물 정보에서 가장 처음 위치하는 사람의 상세정보 출력
    }



}
