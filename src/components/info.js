import React, { Component } from 'react';
class Info extends Component {
    constructor(props){
        super(props);
        this.onClick=this.onClick.bind(this);
    }
    onClick(){
        this.props.status('javascript');
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>Huỳnh Văn Như</h1>
                    <p>FRESHER FONT-END</p>
                </div>
                <div className="flex-container">
                    <div className="info">
                        <div>
                            <h3>Mục Tiêu Nghề Nghiệp</h3>
                            <p>-Hiện em đang học về font-end, lộ trình của em là biết khái quát về mảng font-end, tiếp đến là
                              học hỏi về nodejs để có thể tạo ra một trang web hoàn chình, tiếp đến là học reactjs để đi sâu
                về mảng font-end framword, và đích cuối là react-native.<br />
                                -Tiếng Anh của em hơi yếu nên trương thời gian làm sẽ bổ sung thêm kĩ năng tiếng anh của
                mình.<br />
                                -Mong anh/chị chỉ bảo giúp đỡ em trong quá trình làm việc. Em cảm ơn </p>
                            <h3 className="hv"><i className="fas fa-graduation-cap" /> Học Vấn</h3>
                            <p>ĐẠI HỌC KHÁNH HÒA</p>
                            <p />Chuyên ngành: Công nghệ thông tin<p />
                            <p>Tốt nghiệp hệ Cao đẳng, loại Khá</p><p />
                            <h3 className="knlv"><i className="fas fa-briefcase" /> Kinh Nghiệm Làm Việc</h3>
                            <p>CÔNG TY TNHH CÔNG NGHỆ VÀ TRUYỀN THÔNG WIDOSOFT</p>
                            <ul>
                                <li>biết cách responsive cho web</li>
                                <li>cơ bản về react-native</li>
                                <li>học cách sử dụng SASS và git cơ bản</li>
                            </ul>
                            <h3 className="ktcm"><i className="fas fa-graduation-cap" /> Kiến Thức Chuyên Môn</h3>
                            <ul>
                                <li>HTML/CSS/Javascript</li>
                                <li>Boostrap4/SASS</li>
                                <li>React-native (cơ bản)</li>
                            </ul>
                            <h3 className="npdl"><i className="fas fa-graduation-cap" /> Những Project Đã Làm</h3>
                            <ul>
                                <li>Giao diện web game giúp chọn lọc củng như xem chi chiết các nhân vật đã và chưa sở hữu.
                  <a href="https://github.com/vipvodanhkute/Lol">Link</a>
                                </li>
                                <li>Giao diện app game giúp chọn lọc củng như xem chi chiết các nhân vật.
                  <a href="https://github.com/vipvodanhkute/rn_LolMoblie">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="add">
                        <img src="../image/59798569_297465941189653_437940618124066816_n.jpg" alt="hinh" />
                        <div className="info">
                            <p><i className="far fa-calendar-alt" /> 20/01/1996</p>
                            <p><i className="fas fa-user" /> Name</p>
                            <p><i className="fas fa-phone" /> 0914885317</p>
                            <p><i className="fas fa-address-card" /> Nha Trang - Khánh Hòa</p>
                            <p><i className="fab fa-facebook-square" /><a href="https://www.facebook.com/huynhvannnhu"> Như Huỳnh</a></p>
                        </div>
                        <h3 className="kn">Kỹ Năng</h3>
                        <a onClick={this.onClick}>
                            <p>JAVASCRIPT</p>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '70%' }} />
                            </div>
                        </a>
                        <p>Làm việc nhóm</p>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '60%' }} />
                        </div>
                        <p>Tự nghiên cứu</p>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '70%' }} />
                        </div>
                        <a href="./javascript.html">
                            <p>JAVASCRIPT</p>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '70%' }} />
                            </div>
                        </a>
                        <h3 className="st">Sở Thích</h3>
                        <ul>
                            <li>Bơi lội</li>
                            <li>Chơi game</li>
                            <li>Xem phim</li>
                            <li>Du lịch</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Info