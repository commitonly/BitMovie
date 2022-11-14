package data.domain.movie;

import lombok.Data;

@Data
public class JoinMovieReviewPay {

    private int movie_pk;
    private String m_name;
    private String m_type;
    private String m_sdate;
    private String m_edate;
    private int m_runtime;
    private String m_age_grd;
    private String m_info;
    private String m_photo;
    private int revw_avgstar;
    private int pay_count;

}
