import React, { Component } from 'react';
import Unit from './unit';
class Javascript extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            question: [
                {
                    title: <pre>{"    "}1. Nguyên tố hóa học{"\n"}Hóa chất chỉ gồm các nguyên tố C, H, O có trọng lượng 12,1, 16 tương ứng.{"\n"}Nó được biểu diễn dạng "nén", ví dụ COOHHH là CO2H3 hay CH (CO2H) (CO2H) (CO2H) là CH(CO2H)3.{"\n"}Nếu ở dạng nén thì số lần lặp &gt;=2 và &lt;=9.{"\n"}Tính khối lượng hóa chất.{"\n"}Input{"\n"}Gồm một dòng mô tả hóa chất không quá 100 kí tự chỉ gồm C, H, O, (, ), 2,..,9.{"\n"}Output{"\n"}Khối lượng của hóa chất (luôn &lt;=10000).{"\n"}</pre>
                    ,
                    function: this.c1
                },
                {
                    title: <pre>{"    "}2. Nhìn và đọc{"\n"}{"    "}Phép biến đổi "nhìn và đọc" được định nghĩa như sau: Bắt đầu từ số ở đầu tiên X. Với các số giống nhau thì nhóm lại thành một dãy (giả sử có Y số) thì dãy này được chuyển thành YX. Ví dụ 122344111 đọc là "một 1, hai 2, một 3, hai 4, ba 1", do đó chuỗi 122344111 chuyển thành 1122132431. {"\n"}{"    "}Input Dòng đầu chứa số bộ test:{"  "}Mỗi dòng sau chứa 1 bộ test chứa chuỗi cần biến đổi (không quá 1000 chữ số) {"\n"}{"    "}Output {"\n"}{"    "}Với mỗi bộ test, in ra kết quả phép biến đổi {"\n"}</pre>
                    ,
                    function: this.c2
                },
                {
                    title: <pre>{"    "}3. Làm tròn số {"\n"}{"    "}Cho trước một số nguyên, người ta sẽ làm tròn số này theo quy tắc sau: {"\n"}{"    "}• Nếu số đó lớn hơn 10 thì sẽ được làm tròn đến số hàng chục gần nhất • Sau đó nếu kết quả lớn hơn 100 thì làm tròn đến số hàng trăm gần nhất • Sau đó nếu kết quả lớn hơn 1000 thì làm tròn đến số hàng nghìn gần nhất • …cứ tiếp tục như vậy … Chú ý: giá trị 5 được làm tròn lên. {"\n"}{"    "}Hãy viết chương trình làm tròn số theo quy tắc trên. {"\n"}{"    "}Input {"\n"}{"    "}Dòng đầu tiên chứa số n là số bộ test (không quá 100). {"\n"}{"    "}• n dòng tiếp theo, mỗi dòng ghi một số nguyên x với 0 &lt;= x &lt;= 99999999. {"\n"}{"    "}Output {"\n"}{"    "}• Với mỗi bộ test, in ra màn hình trên một dòng kết quả của phép làm tròn. {"\n"}{"    "}</pre>
                    ,
                    function: this.c3
                },
                {
                    title: <pre>{"    "}4. Số thuận nghịch Ngày nay, việc sử dụng bàn phím điện thoại di động để nhấn các số đã trở thành một việc rất quen thuộc với các bạn sinh viên. Ai cũng biết các phím số trên điện thoại cũng là các phím dùng để nhấn các chữ cái: {"\n"}{"    "}2: ABC, 3: DEF, 4: GHI, 5: JKL, 6: MNO, 7: PQRS, 8: TUV, 9: WXYZ {"\n"}{"    "}Nam viết ra giấy một dãy ký tự và đố Bình xác định đó là dãy số nào theo cách nhấn số trên điện thoại (chỉ xem xét sự tương ứng giữa số và ký tự chứ không xem xét phải nhấn bao nhiêu lần phím đó, ví dụ cả A, B, C đều là một số 2). Bình rất nhanh chóng xác định được kết quả, không những thế Bình còn muốn xác định nhanh xem số đó có phải là số dạng thuận nghịch hay không.{"  "}Một số là thuận nghịch nếu viết theo thứ tự ngược lại cũng là chính nó. Hãy viết chương trình giúp Bình thực hiện công việc trên. {"\n"}{"    "}Input {"\n"}{"    "}• Dòng đầu tiên chứa số n là số bộ test (không quá 1000). • Mỗi bộ test viết trên một dòng một dãy ký tự gồm các chữ cái có thể là chữ hoa hoặc chữ thường, dài không quá 20 ký tự, không có khoảng trống. {"\n"}{"    "}Output Với mỗi bộ test, in ra màn hình, trên một dòng, chữ “YES” nếu đó tương ứng là số thuận nghịch, chữ “NO” nếu ngược lại.{"      "}{"\n"}{"    "}</pre>
                    ,
                    function: this.c4
                },
                {
                    title: <pre>{"        "}5. Đàn kiến Ngày Valentine, Tí mua socola đem đi tỏ tỉnh với người yêu, nhưng đáng tiếc đã bị bạn nữ kia từ chối. Đành rằng đã mua thì phải ăn, Tí mang về nhà ăn một mình. Để thử hương vị lạ, Tí ăn cùng với cả dâu tây, Tí để vài miếng dâu tây lên thanh socola rồi sẵn thế mà chén.{"\n"}{"        "}Đang chuẩn bị thưởng thức thì Tí nhận được điện thoại từ Tèo, Tèo rủ Tí sang uống rượu giải sầu vì lí do thất tình tương tự. Tí chạy sang luôn, quên mất thanh socola còn đang dang dở trên bàn. Đàn kiến nhà Tí tha hồ được bữa. Chúng càn quét theo từng hàng hoặc từng cột một.{"\n"}{"        "}Nhưng không hiểu sao bọn chúng bị dị ứng với mùi của dâu tây, chúng sẽ không “tấn công” những hàng hoặc cột nào có miếng dâu tây, còn đâu là chúng chén sạch! Các bạn hãy tính toán xem số lượng miếng số socola lũ kiến sẽ ăn được là bao nhiêu? {"\n"} {"\n"}{"        "}Input Dòng đầu tiên gồm 2 số r và c (2 &lt;= r, c &lt;= 10) là số hàng và số cột của thanh socola.{"  "}r dòng tiếp theo, mỗi dòng gồm c kí tự, kí tự ‘.’ biểu diễn 1 miếng socola bình thường, kí tự ‘S’ biểu diễn miếng socola có miếng dâu tây.{"  "}{"\n"}{"                     "}{"\n"}{"        "}Output In ra số lượng miếng socola nhiều nhất mà đàn kiến có thể ăn được. {"\n"}{"         "}{"\n"}{"         "}{"\n"}{"    "}</pre>
                    ,
                    function: this.c5
                },
                {
                    title: <pre>{"                    "}6. Chia kẹo Đi chợ về, mẹ mua một gói kẹo cho anh em Tèo.{"\n"}{"                    "}Mẹ bảo Tèo rằng đợi các em đi học về thì hãy chia, nhưng Tèo không nghe, cứ đòi ăn trước.{"\n"}{"                    "}Tèo chia đều kẹo cho tất cả anh em, nếu như chia không đều thì các phần nhiều hơn (nhiều hơn các phần còn lại 1 cái) sẽ dành cho những đứa bé hơn.{"\n"}{"                    "}Là anh cả nên Tèo chỉ lấy phần nhỏ nhất. Khi lũ trẻ đi học về, chúng nhận phần của mình, nhưng nghi ngờ anh Tèo là người lấy phần nhiều nhất, vì vậy chúng đem đi hỏi mẹ xem gói kẹo ban đầu có tất cả bao nhiêu cái? Các bạn hãy tính toán xem số lượng kẹo có thể có ban đầu nhỏ nhất và lớn nhất là bao nhiêu?{"\n"}{"                    "}Input Gồm 2 số nguyên n (2 &lt;= n &lt;= 15) và k (n &lt;= k &lt;= 100) lần lượt là những đứa trẻ trong gia đình của Tèo và số kẹo còn lại sau khi Tèo đã ăn hết phần của mình.{"\n"}{"                    "}Output In ra 2 giá trị số kẹo nhỏ nhất và lớn nhất có thể có ban đầu. {"\n"}{"                     "}{"\n"}{"                     "}{"\n"}{"                "}</pre>
                    ,
                    function: this.c6
                },
                {
                    title: <pre>{"        "}7. Lặp lại các ký tự Với một xâu ký tự S, và một số nguyên R, hãy tạo ra một xâu T bằng cách mỗi ký tự trong S được lặp lại R lần.{"\n"}{"        "}Các ký tự trong S có thể nằm trong dãy: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$%*+-./: {"\n"} {"\n"}{"        "}Input Dòng 1 ghi số bộ test (không quá 1000) Mỗi bộ test gồm số thứ tự, một dấu cách, tiếp theo là số 1&lt;=R&lt;=8, một dấu cách, rồi đến xâu ký tự S (không quá 20 ký tự). {"\n"}{"         "}{"\n"}{"        "}Output Với mỗi bộ test ghi trên một dòng số thứ tự bộ test, một dấu cách rồi đến xâu T. {"\n"}{"         "}{"\n"}{"         "}{"\n"}{"    "}</pre>
                    ,
                    function: this.c7
                },
                {
                    title: <pre>{"        "}8. M O O Những con bò đang chuẩn bị bắt đầu chơi trò “Moo”.{"\n"}{"        "}Chúng đứng trên một hàng dài, trong đó mỗi con bò trong hàng sẽ nói một chữ cái nhanh nhất có thể. Con bò nào phạm luật đầu tiên thì sẽ thua.{"\n"}{"        "}Dãy các kí tự “Moo” có thể kéo dài liên tục và không giới hạn.{"\n"}{"        "}Chúng sẽ bắt đầu như sau: m o o m o o o m o o m o o o o m o o m o o o m o o m o o o o Dãy kí tự được diễn tả như sau:{"\n"}{"        "}Gọi S(0)là một trong ba kí tự “m o o”. Sau đó dãy kí tự S(k)sẽ bằng dãy S(k-1) và thêm vào “m o … o” với k+2 chữ o, và sau đó cộng thêm một lần cho S(k-1).{"\n"}{"        "}Ví dụ: {"\n"}{"        "}S(0) = "m o o" {"\n"}{"        "}S(1) = "m o o m o o o m o o" {"\n"}{"        "}S(2) = "m o o m o o o m o o m o o o o m o o m o o o m o o"{"\n"}{"        "}Với cách này sẽ tạo được dãy kí tự rất dài, và dãy này sẽ dùng cho game Moo.{"\n"}{"        "}Cô bò Bessie muốn biết kí tự thứ N của dãy này là chữ “m” hay chữ “o”. Bạn hãy giúp Bessie nhé! {"\n"} {"\n"}{"        "}Input *Dòng 1: Gồm một số nguyên N(1 &lt;= N &lt;= 10^9). {"\n"}{"         "}{"\n"}{"        "}Output *Dòng 1: Dòng duy nhất chứa kí tự “m” hoặc “o”. {"\n"}{"         "}{"\n"}{"    "}</pre>
                    ,
                    function: this.c8
                },
                {
                    title: <pre>{"        "}9. Số gần nguyên tố Chúng ta đều biết số nguyên tố là số nguyên dương mà chỉ có duy nhất 2 ước phân biệt.{"\n"}{"        "}Iron man luôn thích những cái đặc biệt và mới mẻ, và anh ra đưa ra 1 định nghĩa mới “Số gần nguyên tố” – là các số nguyên dương mà có đúng 3 ước phân biệt.{"\n"}{"        "}Bạn được cho 1 mảng có n phần tử, hãy kiểm tra xem từng phần tử trong mảng có phải là số gần nguyên tố hay không.{"\n"}{"        "}Input Dòng đầu tiên nhập vào số tự nhiên n (1 &lt;= n &lt;= 10^5) là số phần tử của mảng. Dòng tiếp theo nhập n số nguyên dương x[i] (1 &lt;= x[i] &lt;= 10^12){"\n"}{"        "}Output In ra trên n dòng: dòng thứ i in “YES” nếu x[i] là số gần nguyên tố, ngược lại thì in “NO”.{"\n"}{"    "}</pre>
                    ,
                    function: this.c9
                },
                {
                    title: <pre>{"        "}10. Tính sát thương{"\n"}{"        "}Ursa là một hero rất bá đạo trong DotA, anh có kỹ năng gia tăng sức mạnh sau mỗi cú đánh theo công thức: {"\n"}{"        "}Di = Di-1 + i với i là số thứ tự cú đánh và Di là lượng sát thương gây ra sau cú đánh đó, với i = 1 thì Di = 1.{"\n"}{"        "}Thanh mới tập chơi DotA và chơi một hero có lượng máu cơ bản là X. Hero của Thanh không chịu được đòn đánh có sát thương lớn hơn X.{"\n"}{"        "}Bạn hãy giúp Thanh tính xem có thể chịu được tối đa bao nhiêu cú đánh của Ursa.{"\n"}{"        "}Input Dòng duy nhất chứa số X (1 &lt;= X &lt;= 10000). Output In ra số cú đánh tối đa mà hero của Sơn có thể chịu được{"\n"}{"    "}</pre>
                    ,
                    function: this.c10
                },
            ]
        }
    }
    c1(e) {
        e.preventDefault();
    }
    c2(a) {
        var c2a = a.split("\n");
        var n = c2a.length;
        if (Number(c2a[0]) !== n - 1) {
            return "Du lieu khong dung";
        } else {
            let arr = [];
            let count = 1;
            for (let i = 1; i < n; i++) {
                arr[i] = [];
                for (let j = 0; j < c2a[i].length; j++) {
                    if (c2a[i].charAt(j) === c2a[i].charAt(j + 1)) {
                        count++;
                    } else {
                        arr[i].push(count);
                        arr[i].push(c2a[i].charAt(j));
                        count = 1;
                    }
                }
            };
            var result = "";
            for (let i = 1; i < arr.length; i++) {
                result += `${arr[i].join("")}\n`;
            }

            return result;
        }
    };
    c3(a) {
        var c3a = a;
        var c3Arr = c3a.split("\n");
        var result = "";
        var n = c3Arr.length - 1;
        if (Number(c3Arr[0]) !== (c3Arr.length - 1)) {
            return "Du lieu khong dung";
        } else {
            for (let i = 1; i <= n; i++) {
                c3Arr[i] = c3Arr[i].split("");
                var hs;
                var m = c3Arr[i].length;
                for (let j = 1; j < m; j++) {
                    if (j !== m - 1) {
                        hs = Math.pow(10, i);
                        if (Number(c3Arr[i].join("")) > hs) {
                            if (Number(c3Arr[i][m - j]) >= 5) {
                                c3Arr[i][m - j] = 0;
                                c3Arr[i][m - j - 1] = Number(c3Arr[i][m - j - 1]) + 1;
                            } else {
                                c3Arr[i][m - j] = 0;
                                c3Arr[i][m - j - 1] = 0;
                            }
                        } else {
                        }
                    } else {
                        if (Number(c3Arr[i][1]) >= 5) {
                            c3Arr[i][0] = Number(c3Arr[i][0]) + 1;
                            c3Arr[i][1] = 0;
                        } else {
                            c3Arr[i][1] = 0
                        }
                    }
                }
            }
            for (let i = 1; i < c3Arr.length; i++) {
                result += c3Arr[i].join("") + "\n";
            }
            return result;
        }

    }
    c4(a) {
        var c4a = a;
        var c4Arr = c4a.split("\n");
        var result = [];
        if (c4Arr.length - 1 !== Number(c4Arr[0])) {
            return "Dữ liệu không đúng";
        } else {
            for (let i = 1; i <= c4Arr[0]; i++) {
                var n = c4Arr[i].length;
                for (let j = 0, k = n - 1; j <= n / 2, k >= n / 2; j++ , k--) {
                }
                for (let j = 0, k = n - 1; j <= n, k >= 0; j++ , k--) {
                    if (c4Arr[i].charAt(j) !== c4Arr[i].charAt(k)) {
                        result[i] = "N0";
                        break;
                    } else {
                        result[i] = "YES";
                    }
                }
            }
            var y = ""
            result.forEach((x) => {
                y += x + "\n"
            })
            return y;
        }
    }
    c5(a) {
        var c5a = a;
        var c5Arr = c5a.split("\n");
        var a = [];
        var scl = c5Arr[0].split(" ");
        var r = scl[0];
        var c = scl[1];
        var o = r * c;
        var i = 0;
        while (i < o) {
            a.push(0);
            i++
        }
        console.log(o);
        console.log(a);
        for (let i = 1; i <= r; i++) {
            for (let j = 0; j < c; j++) {
                if (c5Arr[i].charAt(j) === "S") {
                    let x = (i - 1) * c + j;
                    a[x] = 1;
                }
            }
        }
        console.log(a);
        for (let i = 0; i < r; i++) {
            let m = 0;
            for (let j = 0; j < c; j++) {
                let x = i * c + j;
                if (a[x] === 1) {
                    m++;
                    break;
                }
            }
            if (m === 0) {
                for (let j = 0; j < c; j++) {
                    let x = i * c + j;
                    a[x] = 2;
                }
            }

        }
        for (let i = 0; i < c; i++) {
            let tam = 0;
            for (let j = 0; j < r; j++) {
                let x = i + j * c;
                if (a[x] === 1) {
                    tam++
                    break;
                }
                /*if(tam==0){
                    for(let j=1;j<=r;j++){
                        let x=i+j*4-r-1;
                        a[x]=2;
                    }
                }*/
            }
            if (tam === 0) {
                for (let j = 0; j < r; j++) {
                    let x = i + j * c;
                    a[x] = 2;
                }
            }
        }
        console.log(a);
        var count = 0;
        a.forEach(x => {
            if (x === 2) {
                count++
            }
        })
        return count;
    }
    c6(a) {
        var c6a = a;
        var c6Arr = c6a.split(" ");
        if (c6Arr.length !== 2) {
            return "Du lieu khong dung";
        } else {
            var result = [];
            var str = "";
            var x = c6Arr[1] % (c6Arr[0] - 1);
            var y = c6Arr[1] / (c6Arr[0] - 1);
            if (x === 0) {
                result.push(c6Arr[0] * y - 1);
                result.push(c6Arr[0] * y);
            } else {
                result.push(Math.floor(y) * c6Arr[0] + 1);
                result.push(Number(Math.ceil(y)) - 1 + Number(c6Arr[1]));
            }
            for (let i = 0; i <= 1; i++) {
                str += result[i] + "\n"
            }
            return str;
        }
    }
    c7(a) {
        var c7a = a;
        var c7Arr = c7a.split("\n");
        var arr = [];
        var result = "";
        console.log(c7Arr[0]);
        console.log(c7Arr.length - 1);
        if ((Number(c7Arr[0])) !== c7Arr.length - 1) {
            return "Dữ liệu đầu vào không đúng";
        } else {
            for (let i = 1; i <= c7Arr[0]; i++) {
                arr.push(c7Arr[i].split(" ")[2].split("").map(t => {
                    for (let j = 1; j < c7Arr[i].split(" ")[1]; j++) {
                        t += t;
                    }
                    return t
                }))
            }
            for (let i = 0; i < arr.length; i++) {
                result += `${i + 1} ${arr[i].join("")}\n`
            }
            return result;
        }

    }
    c8(a) {
        var c8a = a;
        if (isNaN(c8a)) {
            return "du lieu khong dung";
        } else {
            var str = "moo";
            for (let i = 1; i < c8a; i++) {
                var o = "";
                for (let j = 1; j <= i; j++) {
                    o += "o";
                }
                o += "oo";
                str = str + "m" + o + str;
            }
            return str.charAt(c8a - 1);
        }
    }
    c9(a) {
        var x = [];
        var result = "";
        var c9a = a.split("\n");
        var c9a1 = c9a[1].split(" ");
        if (isNaN(c9a[0])) {
            return "Du lieu khong dung";
        } else {
            for (let i = 0; i < c9a1.length; i++) {
                var count = 0;;
                for (let j = 1; j <= c9a1[i] / 2; j++) {
                    console.log(j);
                    if (c9a1[i] % j === 0) {
                        count++;
                    }
                }
                console.log(count);
                if (count === 2) {
                    x.push("YES");
                } else {
                    x.push("NO");
                }
            }
            x.forEach(y => {
                result += y + "\n"
            })
            return result;
        }
    }
    c10(a) {
        var X = Number(a);
        var tongst = 0;
        var result;
        for (let i = 1; i <= X; i++) {
            tongst += tongst + i;
            if (tongst >= X) {
                result = i;
                break;
            }
        }
        return result
    }
    render() {
        var element = this.state.question.map((value, index) => {
            return <Unit
                key={index}
                title={value.title}
                number={index + 1}
                onClick={value.function}
            />
        })
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table">
                                <thead>
                                    <tr><td>Họ và tên</td>
                                        <td>SĐT</td>
                                        <td>Địa chỉ</td>
                                    </tr></thead>
                                <tbody>
                                    <tr>
                                        <td>Huỳnh Văn Như</td>
                                        <td>0914885317</td>
                                        <td>Nha Trang - Khánh Hòa</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {element}
                </div>
            </div>

        );
    }
}

export default Javascript;

