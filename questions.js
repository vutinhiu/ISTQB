const questions = [
  {
    "id": 1,
    "topic": "Exam A",
    "question": "What is one potential benefit of using a test automation tool?",
    "options": {
      "A": "The quality of defects will improve",
      "B": "Ease of access to statistics about test progress",
      "C": "Disk space is not required to track versions of test artifacts",
      "D": "Less network traffic generated"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Ease of access to statistics about test progress",
    "question_vi": "Một lợi ích tiềm năng của việc sử dụng công cụ tự động hóa thử nghiệm là gì?",
    "options_vi": {
      "A": "Chất lượng của các khuyết tật sẽ được cải thiện",
      "B": "Dễ dàng truy cập số liệu thống kê về tiến độ kiểm tra",
      "C": "Không cần dung lượng ổ đĩa để theo dõi các phiên bản của tạo phẩm thử nghiệm",
      "D": "Lưu lượng mạng được tạo ra ít hơn"
    },
    "explanation_vi": "Đáp án đúng là B: Dễ dàng truy cập số liệu thống kê về tiến độ kiểm tra"
  },
  {
    "id": 2,
    "topic": "Exam A",
    "question": "Which of the following is a benefit of early stakeholder feedback?",
    "options": {
      "A": "It can be gathered early and then used to make changes after the product goes to production to make it more user friendly",
      "B": "It allows the project manager to get a better view of the changes that will be needed for the next version",
      "C": "The developers get a better understanding of what they are building",
      "D": "The testers get a better understanding of the test automation requirements"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: The developers get a better understanding of what they are building",
    "question_vi": "Điều nào sau đây là lợi ích của phản hồi sớm của các bên liên quan?",
    "options_vi": {
      "A": "Nó có thể được thu thập sớm và sau đó được sử dụng để thực hiện các thay đổi sau khi sản phẩm đi vào sản xuất nhằm làm cho sản phẩm thân thiện hơn với người dùng.",
      "B": "Nó cho phép người quản lý dự án có cái nhìn rõ hơn về những thay đổi cần thiết cho phiên bản tiếp theo",
      "C": "Các nhà phát triển hiểu rõ hơn về những gì họ đang xây dựng",
      "D": "Người thử nghiệm hiểu rõ hơn về các yêu cầu tự động hóa thử nghiệm"
    },
    "explanation_vi": "Đáp án đúng là C: Các nhà phát triển hiểu rõ hơn về những gì họ đang xây dựng"
  },
  {
    "id": 3,
    "topic": "Exam A",
    "question": "Which of the following is a good testing practice that applies regardless of the specific software development lifecycle being used?",
    "options": {
      "A": "Prompt and prepared attendance to stand-up meetings",
      "B": "Step-by-step test case documentation",
      "C": "Ensuring there is a corresponding testing activity for every software development activity",
      "D": "Involving the stakeholders in reviewing all acceptance criteria prior to designing test cases"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Ensuring there is a corresponding testing activity for every software development activity",
    "question_vi": "Điều nào sau đây là phương pháp kiểm thử tốt được áp dụng bất kể vòng đời phát triển phần mềm cụ thể đang được sử dụng?",
    "options_vi": {
      "A": "Tham dự nhanh chóng và chuẩn bị sẵn sàng cho các cuộc họp độc lập",
      "B": "Tài liệu trường hợp thử nghiệm từng bước",
      "C": "Đảm bảo có hoạt động thử nghiệm tương ứng cho mọi hoạt động phát triển phần mềm",
      "D": "Thu hút các bên liên quan xem xét tất cả các tiêu chí chấp nhận trước khi thiết kế các trường hợp thử nghiệm"
    },
    "explanation_vi": "Đáp án đúng là C: Đảm bảo có hoạt động kiểm thử tương ứng cho mọi hoạt động phát triển phần mềm"
  },
  {
    "id": 4,
    "topic": "Exam A",
    "question": "In an Agile development model, the completion of testing or “done” is defined by which of the following?",
    "options": {
      "A": "Project management",
      "B": "Entry criteria",
      "C": "Exit criteria",
      "D": "The expected test completion date"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Exit criteria",
    "question_vi": "Trong mô hình phát triển Agile, việc hoàn thành thử nghiệm hoặc “hoàn thành” được xác định bởi điều nào sau đây?",
    "options_vi": {
      "A": "Quản lý dự án",
      "B": "Tiêu chí đầu vào",
      "C": "Tiêu chí thoát",
      "D": "Ngày hoàn thành bài kiểm tra dự kiến"
    },
    "explanation_vi": "Câu trả lời đúng là C: Tiêu chí thoát"
  },
  {
    "id": 5,
    "topic": "Exam A",
    "question": "You are testing web application software that allows a person to use their travel points to make flight and hotel reservations. When the user logs into the software (username/password) they are presented with a set of options. From that set of options, they can pick the following: 1. View points balance 2. Make flight reservation 3. Make hotel reservation From the login page, they can log in successfully or might fail and need to try again. Once they login successfully they can go to either the view points, flight reservation or hotel reservation page. Which of the following is the correct list of the transitions (a transition is shown as >) that should be tested, assuming that the test ends when a reservation state is reached.",
    "options": {
      "A": "Points > Reservation",
      "B": "Login > Points, Points > Flight, Points > Hotel",
      "C": "Login > Login, Login > Points, Login > Flight, Login > Hotel, Points > Flight, Points > Hotel",
      "D": "Login > Login, Login > Points, Login > Flight, Login > Hotel, Flight > Hotel, Hotel > Flight, Flight > Login, Hotel > Login"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Login > Login, Login > Points, Login > Flight, Login > Hotel, Points > Flight, Points > Hotel",
    "question_vi": "Bạn đang thử nghiệm phần mềm ứng dụng web cho phép một người sử dụng điểm du lịch của họ để đặt chuyến bay và khách sạn. Khi người dùng đăng nhập vào phần mềm (tên người dùng/mật khẩu), họ sẽ thấy một bộ tùy chọn. Từ bộ tùy chọn đó, họ có thể chọn những mục sau: 1. Xem số dư điểm 2. Đặt chuyến bay 3. Đặt phòng khách sạn Từ trang đăng nhập, họ có thể đăng nhập thành công hoặc có thể không thành công và cần thử lại. Sau khi đăng nhập thành công, họ có thể truy cập các điểm xem, đặt vé máy bay hoặc trang đặt phòng khách sạn. Điều nào sau đây là danh sách chính xác của các quá trình chuyển đổi (một quá trình chuyển đổi được hiển thị dưới dạng >) cần được kiểm tra, giả sử rằng quá trình kiểm tra kết thúc khi đạt đến trạng thái đặt trước.",
    "options_vi": {
      "A": "Điểm > Đặt chỗ",
      "B": "Đăng nhập > Điểm, Điểm > Chuyến bay, Điểm > Khách sạn",
      "C": "Đăng nhập > Đăng nhập, Đăng nhập > Điểm, Đăng nhập > Chuyến bay, Đăng nhập > Khách sạn, Điểm > Chuyến bay, Điểm > Khách sạn",
      "D": "Đăng nhập > Đăng nhập, Đăng nhập > Điểm, Đăng nhập > Chuyến bay, Đăng nhập > Khách sạn, Chuyến bay > Khách sạn, Khách sạn > Chuyến bay, Chuyến bay > Đăng nhập, Khách sạn > Đăng nhập"
    },
    "explanation_vi": "Đáp án đúng là C: Đăng nhập > Đăng nhập, Đăng nhập > Điểm, Đăng nhập > Chuyến bay, Đăng nhập > Khách sạn, Điểm > Chuyến bay, Điểm > Khách sạn"
  },
  {
    "id": 6,
    "topic": "Exam A",
    "question": "Which of the following is an advantage of the whole team approach?",
    "options": {
      "A": "Any person in the team with the right skills can perform any task",
      "B": "Tasks are assigned to specific team members who will own that task until completion",
      "C": "Testers have clear ownership of quality and this eliminates confusion and overlap",
      "D": "Business representatives are not included in the team so they can supply independent assessment during UAT"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Any person in the team with the right skills can perform any task",
    "question_vi": "Điều nào sau đây là ưu điểm của cách tiếp cận toàn nhóm?",
    "options_vi": {
      "A": "Bất kỳ người nào trong nhóm có kỹ năng phù hợp đều có thể thực hiện bất kỳ nhiệm vụ nào",
      "B": "Nhiệm vụ được giao cho các thành viên nhóm cụ thể, những người sẽ sở hữu nhiệm vụ đó cho đến khi hoàn thành",
      "C": "Người kiểm tra có quyền sở hữu rõ ràng về chất lượng và điều này giúp loại bỏ sự nhầm lẫn và chồng chéo",
      "D": "Đại diện doanh nghiệp không được đưa vào nhóm nên họ có thể đưa ra đánh giá độc lập trong quá trình UAT"
    },
    "explanation_vi": "Đáp án đúng là A: Bất kỳ ai trong nhóm có kỹ năng phù hợp đều có thể thực hiện bất kỳ nhiệm vụ nào"
  },
  {
    "id": 7,
    "topic": "Exam A",
    "question": "If you are using test results to learn more about the software and are then creating additional tests based on those results, what type of testing are you doing?",
    "options": {
      "A": "Exploratory",
      "B": "Decision-based",
      "C": "Checklist-based",
      "D": "Control flow"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Exploratory",
    "question_vi": "Nếu bạn đang sử dụng kết quả kiểm tra để tìm hiểu thêm về phần mềm và sau đó tạo các bài kiểm tra bổ sung dựa trên những kết quả đó, bạn đang thực hiện loại kiểm tra nào?",
    "options_vi": {
      "A": "Khám phá",
      "B": "Dựa trên quyết định",
      "C": "Dựa trên danh sách kiểm tra",
      "D": "Kiểm soát luồng"
    },
    "explanation_vi": "Đáp án đúng là A: Exploratory"
  },
  {
    "id": 8,
    "topic": "Exam A",
    "question": "You are working on calculating the estimation for a project. You have been given the following numbers by your manager, who is considered to be an expert in estimation: Optimistic = 35 days Likely = 40 days Pessimistic = 65 days Apply the three-point estimation technique, what is the proper expression of the final estimate?",
    "options": {
      "A": "E is 46.3 days, SD = 35",
      "B": "E is 40 days, SD = 6.67",
      "C": "E is 37.3 days, SD = 43.3",
      "D": "E is 43.3 days, SD = 5"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: E is 43.3 days, SD = 5",
    "question_vi": "Bạn đang tính toán dự toán cho một dự án. Bạn đã được người quản lý của bạn, người được coi là chuyên gia về ước tính, đưa ra những con số sau: Lạc quan = 35 ngày Có khả năng = 40 ngày Bi quan = 65 ngày Áp dụng kỹ thuật ước lượng ba điểm, biểu thức đúng của ước tính cuối cùng là gì?",
    "options_vi": {
      "A": "E là 46,3 ngày, SD = 35",
      "B": "E là 40 ngày, SD = 6,67",
      "C": "E là 37,3 ngày, SD = 43,3",
      "D": "E là 43,3 ngày, SD = 5"
    },
    "explanation_vi": "Đáp án đúng là D: E là 43,3 ngày, SD = 5"
  },
  {
    "id": 9,
    "topic": "Exam A",
    "question": "Which black-box technique should be used to verify different responses of the system, depending on its current conditions or previous history?",
    "options": {
      "A": "Use case testing",
      "B": "Decision table testing",
      "C": "State transition testing",
      "D": "Equivalence partitioning"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: State transition testing",
    "question_vi": "Kỹ thuật hộp đen nào nên được sử dụng để xác minh các phản hồi khác nhau của hệ thống, tùy thuộc vào điều kiện hiện tại hoặc lịch sử trước đó của nó?",
    "options_vi": {
      "A": "Kiểm tra trường hợp sử dụng",
      "B": "Kiểm tra bảng quyết định",
      "C": "Kiểm tra chuyển đổi trạng thái",
      "D": "Phân vùng tương đương"
    },
    "explanation_vi": "Đáp án đúng là C: State transition testing"
  },
  {
    "id": 10,
    "topic": "Exam A",
    "question": "You have been given the following story: As a help desk worker I want to enter a caller’s birth date So the system can display the caller’s account information As a team, you have developed the following table of acceptance criteria: You have developed the following test cases and will execute them in the specified order: 1. Enter a valid date and verify that the account retrieved matches the birth date entered. 2. Enter an invalid date and verify that the error indicates the date is invalid. 3. Verify that the date prompt is already formatted for the date with xx/xx/xx format. 4. Enter a valid date and verify that two pages of account information are readable. 5. Enter a valid date and verify that the response occurs within 2 seconds when the system is under an average load. What is incorrect about this approach?",
    "options": {
      "A": "The security test case should be executed first as it is related to access control",
      "B": "The test cases should contain all steps required for execution, including navigation information and SQL statements required to perform the verification",
      "C": "The test cases are not being executed in the proper order",
      "D": "The test cases do not indicate the expected result"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: The test cases are not being executed in the proper order",
    "question_vi": "Bạn đã được kể câu chuyện sau: Là nhân viên bộ phận trợ giúp, tôi muốn nhập ngày sinh của người gọi Để hệ thống có thể hiển thị thông tin tài khoản của người gọi Với tư cách là một nhóm, bạn đã phát triển bảng tiêu chí chấp nhận sau: Bạn đã phát triển các trường hợp kiểm thử sau và sẽ thực hiện chúng theo thứ tự đã chỉ định: 1. Nhập ngày hợp lệ và xác minh rằng tài khoản được truy xuất khớp với ngày sinh đã nhập. 2. Nhập ngày không hợp lệ và xác minh rằng lỗi cho biết ngày đó không hợp lệ. 3. Xác minh rằng lời nhắc ngày đã được định dạng cho ngày có định dạng xx/xx/xx. 4. Nhập ngày hợp lệ và xác minh rằng hai trang thông tin tài khoản có thể đọc được. 5. Nhập ngày hợp lệ và xác minh rằng phản hồi xảy ra trong vòng 2 giây khi hệ thống ở mức tải trung bình. Điều gì sai trong cách tiếp cận này?",
    "options_vi": {
      "A": "Trường hợp kiểm tra bảo mật phải được thực hiện trước tiên vì nó liên quan đến kiểm soát truy cập",
      "B": "Các trường hợp kiểm thử phải chứa tất cả các bước cần thiết để thực thi, bao gồm thông tin điều hướng và các câu lệnh SQL cần thiết để thực hiện xác minh.",
      "C": "Các trường hợp thử nghiệm không được thực hiện theo đúng thứ tự",
      "D": "Các trường hợp thử nghiệm không cho biết kết quả mong đợi"
    },
    "explanation_vi": "Đáp án đúng là C: Các ca kiểm thử không được thực hiện theo đúng thứ tự"
  },
  {
    "id": 11,
    "topic": "Exam A",
    "question": "In what way does configuration management help the tester?",
    "options": {
      "A": "It verifies that the test cases are executed in the correct order",
      "B": "It ensures that regressions do not occur",
      "C": "It enforces proper unit testing and measurement",
      "D": "It uniquely identifies the items to be tested"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: It uniquely identifies the items to be tested",
    "question_vi": "Quản lý cấu hình giúp người thử nghiệm theo cách nào?",
    "options_vi": {
      "A": "Nó xác minh rằng các trường hợp thử nghiệm được thực hiện theo đúng thứ tự",
      "B": "Nó đảm bảo rằng sự hồi quy không xảy ra",
      "C": "Nó thực thi việc kiểm tra và đo lường đơn vị thích hợp",
      "D": "Nó xác định duy nhất các mục cần kiểm tra"
    },
    "explanation_vi": "Giải pháp đúng là D: Nó xác định duy nhất các mục cần kiểm tra"
  },
  {
    "id": 12,
    "topic": "Exam A",
    "question": "If you are responsible for test analysis and test design what is your primary role in your team?",
    "options": {
      "A": "Business analyst",
      "B": "Test manager",
      "C": "Developer",
      "D": "Tester"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Tester",
    "question_vi": "Nếu bạn chịu trách nhiệm phân tích thử nghiệm và thiết kế thử nghiệm, vai trò chính của bạn trong nhóm của mình là gì?",
    "options_vi": {
      "A": "Nhà phân tích kinh doanh",
      "B": "Người quản lý kiểm tra",
      "C": "Nhà phát triển",
      "D": "Người thử nghiệm"
    },
    "explanation_vi": "Câu trả lời đúng là D: Người kiểm tra"
  },
  {
    "id": 13,
    "topic": "Exam A",
    "question": "A functional requirement states that pressure values must always be positive and stay within a range of 100 to 200 pounds for a particular tank (100 and 200 are valid within the range). Which of the following is the minimum set of values that would achieve coverage using the equivalence partitioning technique?",
    "options": {
      "A": "A series of tests where pressure is set to 98, 110, and 201 pounds",
      "B": "A series of tests where pressure is set to 98, 100, and 200 pounds",
      "C": "A series of tests where pressure is set to 100, 110, and 200 pounds",
      "D": "A series of tests where pressure is set to -1, 0, 175, and 297 pounds"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: A series of tests where pressure is set to 98, 110, and 201 pounds",
    "question_vi": "Yêu cầu chức năng nêu rõ rằng các giá trị áp suất phải luôn dương và nằm trong phạm vi từ 100 đến 200 pound đối với một bể cụ thể (100 và 200 là hợp lệ trong phạm vi). Tập hợp giá trị tối thiểu nào sau đây có thể đạt được phạm vi bao phủ khi sử dụng kỹ thuật phân vùng tương đương?",
    "options_vi": {
      "A": "Một loạt các thử nghiệm trong đó áp suất được đặt ở mức 98, 110 và 201 pound",
      "B": "Một loạt thử nghiệm trong đó áp suất được đặt ở mức 98, 100 và 200 pound",
      "C": "Một loạt thử nghiệm trong đó áp suất được đặt ở mức 100, 110 và 200 pound",
      "D": "Một loạt các thử nghiệm trong đó áp suất được đặt thành -1, 0, 175 và 297 pound"
    },
    "explanation_vi": "Đáp án đúng là A: Một loạt các bài kiểm tra trong đó áp suất được đặt thành 98, 110 và 201 pound"
  },
  {
    "id": 14,
    "topic": "Exam A",
    "question": "You have been given the following test cases for execution. You have been told that security and usability are the highest priorities respectively for this banking application. What is the proper execution order for these test cases? 1. Update a customer’s account balance 2. Query a customer’s account balance 3. Delete a request for a paper statement 4. Change the font size on the page to improve readability 5. Create a new payee in a customer’s automatic bill pay list",
    "options": {
      "A": "3, 1, 5, 2, 4",
      "B": "1, 2, 5, 4, 3",
      "C": "1, 3, 5, 2, 4",
      "D": "4, 3, 1, 2, 5"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: 1, 2, 5, 4, 3",
    "question_vi": "Bạn đã được cung cấp các trường hợp kiểm thử sau đây để thực thi. Bạn đã được thông báo rằng bảo mật và khả năng sử dụng lần lượt là những ưu tiên cao nhất đối với ứng dụng ngân hàng này. Thứ tự thực hiện thích hợp cho các trường hợp thử nghiệm này là gì? 1. Cập nhật số dư tài khoản của khách hàng 2. Truy vấn số dư tài khoản của khách hàng 3. Xóa yêu cầu sao kê bằng giấy 4. Thay đổi cỡ chữ trên trang để dễ đọc hơn 5. Tạo người nhận thanh toán mới trong danh sách thanh toán hóa đơn tự động của khách hàng",
    "options_vi": {
      "A": "3, 1, 5, 2, 4",
      "B": "1, 2, 5, 4, 3",
      "C": "1, 3, 5, 2, 4",
      "D": "4, 3, 1, 2, 5"
    },
    "explanation_vi": "Đáp án đúng là B: 1, 2, 5, 4, 3"
  },
  {
    "id": 15,
    "topic": "Exam A",
    "question": "When is the detailed risk analysis for a story first conducted?",
    "options": {
      "A": "Project planning",
      "B": "Iteration planning",
      "C": "Release planning",
      "D": "Epic planning"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Iteration planning",
    "question_vi": "Việc phân tích rủi ro chi tiết cho một câu chuyện được tiến hành lần đầu tiên khi nào?",
    "options_vi": {
      "A": "Lập kế hoạch dự án",
      "B": "Lập kế hoạch lặp lại",
      "C": "Lập kế hoạch phát hành",
      "D": "Kế hoạch sử thi"
    },
    "explanation_vi": "Đáp án đúng là B: Lập kế hoạch lặp lại"
  },
  {
    "id": 16,
    "topic": "Exam A",
    "question": "When tests are being created to achieve statement coverage, what are they exercising?",
    "options": {
      "A": "Only the decisions in the code",
      "B": "Only the loops in the code",
      "C": "Only the executable statements in the code",
      "D": "All lines of code including executable statements and comments"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Only the executable statements in the code",
    "question_vi": "Khi các bài kiểm tra được tạo ra để đạt được phạm vi bao phủ của câu lệnh, chúng đang thực hiện điều gì?",
    "options_vi": {
      "A": "Chỉ những quyết định trong mã",
      "B": "Chỉ các vòng lặp trong mã",
      "C": "Chỉ các câu lệnh thực thi trong mã",
      "D": "Tất cả các dòng mã bao gồm các câu lệnh và nhận xét thực thi được"
    },
    "explanation_vi": "Đáp án đúng là C: Chỉ những câu lệnh thực thi được trong code"
  },
  {
    "id": 17,
    "topic": "Exam A",
    "question": "You have just completed a retrospective at the end of a sprint. One of the developers raised an issue with defect reports not containing information about the configuration, data, and system being used when the failure occurred. When this happens, they reject the defect report and the tester has to update it and send it again. This sometimes takes three or four iterations to get all the information on the report. The test team will take this feedback and will improve the details included in the defect reports. This is an example of which type of benefit for testing?",
    "options": {
      "A": "Increased test effectiveness / efficiency",
      "B": "Team bonding and learning",
      "C": "Improved quality of the test basis",
      "D": "Increased quality of the test cases"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Increased test effectiveness / efficiency",
    "question_vi": "Bạn vừa hoàn thành quá trình hồi cứu khi kết thúc một lần chạy nước rút. Một trong những nhà phát triển đã nêu vấn đề với các báo cáo lỗi không chứa thông tin về cấu hình, dữ liệu và hệ thống đang được sử dụng khi xảy ra lỗi. Khi điều này xảy ra, họ từ chối báo cáo lỗi và người kiểm thử phải cập nhật nó và gửi lại. Việc này đôi khi phải lặp lại ba hoặc bốn lần để có được tất cả thông tin trên báo cáo. Nhóm kiểm thử sẽ tiếp nhận phản hồi này và sẽ cải thiện các chi tiết có trong báo cáo lỗi. Đây là ví dụ về loại lợi ích của việc thử nghiệm?",
    "options_vi": {
      "A": "Tăng hiệu quả/hiệu quả kiểm tra",
      "B": "Gắn kết và học tập nhóm",
      "C": "Cải thiện chất lượng của cơ sở thử nghiệm",
      "D": "Tăng chất lượng của các trường hợp thử nghiệm"
    },
    "explanation_vi": "Đáp án đúng là A: Tăng hiệu quả/hiệu quả kiểm tra"
  },
  {
    "id": 18,
    "topic": "Exam A",
    "question": "What is a reasonable way to control and minimize the cost of testing and development?",
    "options": {
      "A": "Conduct formal reviews to detect defects as early as possible.",
      "B": "Perform a usability analysis prior to user interface design.",
      "C": "Automate error detection at the beginning of acceptance testing.",
      "D": "Hire low-cost, outsourced testing staff for system testing."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Conduct formal reviews to detect defects as early as possible.",
    "question_vi": "Cách hợp lý để kiểm soát và giảm thiểu chi phí thử nghiệm và phát triển là gì?",
    "options_vi": {
      "A": "Tiến hành đánh giá chính thức để phát hiện lỗi càng sớm càng tốt.",
      "B": "Thực hiện phân tích khả năng sử dụng trước khi thiết kế giao diện người dùng.",
      "C": "Tự động phát hiện lỗi khi bắt đầu kiểm tra chấp nhận.",
      "D": "Thuê nhân viên kiểm tra bên ngoài, chi phí thấp để kiểm tra hệ thống."
    },
    "explanation_vi": "Đáp án đúng là A: Tiến hành đánh giá chính thức để phát hiện sai sót càng sớm càng tốt."
  },
  {
    "id": 19,
    "topic": "Exam A",
    "question": "Which of the following is a technique that can be used to develop user stories in collaboration with the developers and business?",
    "options": {
      "A": "DevOps",
      "B": "CI/CD",
      "C": "Brainstorming",
      "D": "Equivalence Partitioning"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Brainstorming",
    "question_vi": "Kỹ thuật nào sau đây có thể được sử dụng để phát triển câu chuyện của người dùng với sự cộng tác của nhà phát triển và doanh nghiệp?",
    "options_vi": {
      "A": "DevOps",
      "B": "CI/CD",
      "C": "Động não",
      "D": "Phân vùng tương đương"
    },
    "explanation_vi": "Câu trả lời đúng là C: Brainstorming"
  },
  {
    "id": 20,
    "topic": "Exam A",
    "question": "Which is a key function of a test management tool?",
    "options": {
      "A": "Facilitates management and control of testing activities",
      "B": "Generates test data based on test management criteria",
      "C": "Generates detailed test specifications based on the test plan",
      "D": "Analyzes and enforces coding and testing standards"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Facilitates management and control of testing activities",
    "question_vi": "Chức năng chính của công cụ quản lý kiểm thử là gì?",
    "options_vi": {
      "A": "Tạo điều kiện thuận lợi cho việc quản lý và kiểm soát các hoạt động thử nghiệm",
      "B": "Tạo dữ liệu thử nghiệm dựa trên tiêu chí quản lý thử nghiệm",
      "C": "Tạo thông số kỹ thuật kiểm tra chi tiết dựa trên kế hoạch kiểm tra",
      "D": "Phân tích và thực thi các tiêu chuẩn mã hóa và thử nghiệm"
    },
    "explanation_vi": "Đáp án đúng là A: Tạo điều kiện thuận lợi cho việc quản lý, kiểm soát hoạt động kiểm thử"
  },
  {
    "id": 21,
    "topic": "Exam A",
    "question": "Which of the following best suggests the need for maintenance testing?",
    "options": {
      "A": "Failures found in alpha testing",
      "B": "The initial release of the software",
      "C": "Changing requirements during pre-deployment activities",
      "D": "Adding a new feature to an existing system"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Adding a new feature to an existing system",
    "question_vi": "Điều nào sau đây gợi ý tốt nhất về sự cần thiết phải thử nghiệm bảo trì?",
    "options_vi": {
      "A": "Lỗi được tìm thấy trong thử nghiệm alpha",
      "B": "Phiên bản đầu tiên của phần mềm",
      "C": "Thay đổi yêu cầu trong các hoạt động trước khi triển khai",
      "D": "Thêm một tính năng mới vào hệ thống hiện có"
    },
    "explanation_vi": "Đáp án đúng là D: Thêm tính năng mới vào hệ thống hiện có"
  },
  {
    "id": 22,
    "topic": "Exam A",
    "question": "Which of the following should you review using static testing?",
    "options": {
      "A": "Memory leak during execution",
      "B": "Performance of a module under load",
      "C": "Interactive output from a debugger",
      "D": "Test plan"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Test plan",
    "question_vi": "Bạn nên xem xét điều nào sau đây bằng cách sử dụng thử nghiệm tĩnh?",
    "options_vi": {
      "A": "Rò rỉ bộ nhớ trong quá trình thực thi",
      "B": "Hiệu suất của một mô-đun đang tải",
      "C": "Đầu ra tương tác từ trình gỡ lỗi",
      "D": "kế hoạch kiểm tra"
    },
    "explanation_vi": "Đáp án đúng là D: Test plan"
  },
  {
    "id": 23,
    "topic": "Exam A",
    "question": "Which of the following is supported by good information traceability?",
    "options": {
      "A": "Portability of test automation code",
      "B": "Understandability of test reports",
      "C": "Dependability of test environments",
      "D": "Stability of the system under test"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Understandability of test reports",
    "question_vi": "Điều nào sau đây được hỗ trợ bởi khả năng truy xuất nguồn gốc thông tin tốt?",
    "options_vi": {
      "A": "Tính di động của mã tự động hóa thử nghiệm",
      "B": "Tính dễ hiểu của các báo cáo thử nghiệm",
      "C": "Độ tin cậy của môi trường thử nghiệm",
      "D": "Tính ổn định của hệ thống được thử nghiệm"
    },
    "explanation_vi": "Đáp án đúng là B: Tính dễ hiểu của báo cáo thử nghiệm"
  },
  {
    "id": 24,
    "topic": "Exam A",
    "question": "Which of the following is a methodical approach to error guessing?",
    "options": {
      "A": "Create a list of possible failures and defects and design tests to address each one",
      "B": "Ask the developers where the likely errors will be and discuss how to test for each one",
      "C": "Review the code to determine areas of high complexity and target those areas with tests",
      "D": "Determine all the decisions in the code and design tests to address each one"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Create a list of possible failures and defects and design tests to address each one",
    "question_vi": "Cách nào sau đây là cách tiếp cận có phương pháp để đoán lỗi?",
    "options_vi": {
      "A": "Tạo một danh sách các lỗi và khiếm khuyết có thể xảy ra và thiết kế các bài kiểm tra để giải quyết từng lỗi",
      "B": "Hỏi các nhà phát triển xem các lỗi có thể xảy ra ở đâu và thảo luận cách kiểm tra từng lỗi",
      "C": "Xem lại mã để xác định các khu vực có độ phức tạp cao và nhắm mục tiêu vào các khu vực đó bằng các thử nghiệm",
      "D": "Xác định tất cả các quyết định trong mã và thiết kế các bài kiểm tra để giải quyết từng quyết định"
    },
    "explanation_vi": "Đáp án đúng là A: Tạo một danh sách các lỗi và khiếm khuyết có thể xảy ra và thiết kế các bài kiểm thử để giải quyết từng lỗi đó"
  },
  {
    "id": 25,
    "topic": "Exam A",
    "question": "Given the following requirement: The system shall compute the car’s position using the following equation: new_distance_traveled + old_position Which type of testing should be implemented to help ensure this requirement is met?",
    "options": {
      "A": "Functional",
      "B": "Reliability",
      "C": "Performance",
      "D": "Maintainability"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Functional",
    "question_vi": "Cho yêu cầu sau: Hệ thống sẽ tính toán vị trí của ô tô bằng phương trình sau: new_distance_traveled + old_position Loại thử nghiệm nào sẽ được triển khai để giúp đảm bảo đáp ứng yêu cầu này?",
    "options_vi": {
      "A": "chức năng",
      "B": "Độ tin cậy",
      "C": "Hiệu suất",
      "D": "Khả năng bảo trì"
    },
    "explanation_vi": "Câu trả lời đúng là A: Chức năng"
  },
  {
    "id": 26,
    "topic": "Exam A",
    "question": "How is branch coverage determined?",
    "options": {
      "A": "By taking the number of branches in the code that have been tested and dividing that by the number of total branches in the code",
      "B": "By taking the number of branches in the code on one path that has been tested and dividing that number by the total paths through the code",
      "C": "By taking the number of statements in the code and dividing those by the number of branches that have been tested",
      "D": "By counting the number of branches in the code that have been tested"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: By taking the number of branches in the code that have been tested and dividing that by the number of total branches in the code",
    "question_vi": "Phạm vi chi nhánh được xác định như thế nào?",
    "options_vi": {
      "A": "Bằng cách lấy số nhánh trong mã đã được kiểm tra và chia cho tổng số nhánh trong mã",
      "B": "Bằng cách lấy số nhánh trong mã trên một đường dẫn đã được kiểm tra và chia số đó cho tổng số đường dẫn xuyên qua mã",
      "C": "Bằng cách lấy số lượng câu lệnh trong mã và chia cho số nhánh đã được kiểm tra",
      "D": "Bằng cách đếm số nhánh trong code đã được test"
    },
    "explanation_vi": "Câu trả lời đúng là A: Bằng cách lấy số nhánh trong mã đã được kiểm tra và chia cho tổng số nhánh trong mã"
  },
  {
    "id": 27,
    "topic": "Exam A",
    "question": "You are using boundary value analysis to determine your test data. What values should you use to test a routine that requires an integer input (x) to be greater than zero and less than 100 to achieve 100% minimum coverage using the two-point boundary value analysis technique?",
    "options": {
      "A": "0, 100",
      "B": "-1, 1, 99, 101",
      "C": "0, 1, 99, 100",
      "D": "-1, 0, 1, 99, 100, 101"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: 0, 1, 99, 100",
    "question_vi": "Bạn đang sử dụng phân tích giá trị biên để xác định dữ liệu thử nghiệm của mình. Bạn nên sử dụng những giá trị nào để kiểm tra quy trình yêu cầu đầu vào số nguyên (x) lớn hơn 0 và nhỏ hơn 100 để đạt được phạm vi bao phủ tối thiểu 100% bằng kỹ thuật phân tích giá trị biên hai điểm?",
    "options_vi": {
      "A": "0, 100",
      "B": "-1, 1, 99, 101",
      "C": "0, 1, 99, 100",
      "D": "-1, 0, 1, 99, 100, 101"
    },
    "explanation_vi": "Đáp án đúng là C: 0, 1, 99, 100"
  },
  {
    "id": 28,
    "topic": "Exam A",
    "question": "You are working with a geographically and time zone distributed team. It is important that the entire team always have access to the latest test execution information. Which of these is the most appropriate method for communicating that status?",
    "options": {
      "A": "Daily stand-up meetings with everyone",
      "B": "Dashboards connected to the test management and defect management systems that automatically update when a change is made",
      "C": "Email sent out hourly to all team members with red text for any new issues with a “must read” note in the subject line",
      "D": "Formal test reports issued each week with trend charts and residual defect status information"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Dashboards connected to the test management and defect management systems that automatically update when a change is made",
    "question_vi": "Bạn đang làm việc với một nhóm phân bổ theo múi giờ và địa lý. Điều quan trọng là toàn bộ nhóm luôn có quyền truy cập vào thông tin thực hiện kiểm thử mới nhất. Phương pháp nào sau đây là phương pháp thích hợp nhất để truyền đạt trạng thái đó?",
    "options_vi": {
      "A": "Cuộc họp độc lập hàng ngày với mọi người",
      "B": "Bảng điều khiển được kết nối với hệ thống quản lý kiểm tra và quản lý lỗi tự động cập nhật khi có thay đổi",
      "C": "Email được gửi hàng giờ cho tất cả các thành viên trong nhóm có văn bản màu đỏ cho bất kỳ vấn đề mới nào kèm theo ghi chú “phải đọc” ở dòng chủ đề",
      "D": "Báo cáo kiểm tra chính thức được phát hành mỗi tuần với biểu đồ xu hướng và thông tin trạng thái lỗi còn sót lại"
    },
    "explanation_vi": "Đáp án đúng là B: Dashboard kết nối với hệ thống quản lý kiểm thử và quản lý lỗi tự động cập nhật khi có thay đổi"
  },
  {
    "id": 29,
    "topic": "Exam A",
    "question": "During which activity in the review process are the quality characteristics selected for evaluation?",
    "options": {
      "A": "Initiating",
      "B": "Planning",
      "C": "Analysis",
      "D": "Fixing"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Planning",
    "question_vi": "Trong hoạt động nào trong quá trình xem xét các đặc tính chất lượng được chọn để đánh giá?",
    "options_vi": {
      "A": "Bắt đầu",
      "B": "quy hoạch",
      "C": "Phân tích",
      "D": "sửa chữa"
    },
    "explanation_vi": "Đáp án đúng là B: Lập kế hoạch"
  },
  {
    "id": 30,
    "topic": "Exam A",
    "question": "Which testing principle provides a good reason to base testing upon risk mitigation priorities?",
    "options": {
      "A": "Testing shows the presence of defects",
      "B": "Exhaustive testing is impossible",
      "C": "Tests wear out",
      "D": "Defects tend to cluster in a few modules"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Exhaustive testing is impossible",
    "question_vi": "Nguyên tắc thử nghiệm nào cung cấp lý do chính đáng để thử nghiệm dựa trên các ưu tiên giảm thiểu rủi ro?",
    "options_vi": {
      "A": "Kiểm tra cho thấy sự hiện diện của khuyết tật",
      "B": "Kiểm tra toàn diện là không thể",
      "C": "Các bài kiểm tra bị hao mòn",
      "D": "Các khiếm khuyết có xu hướng tập trung lại trong một vài mô-đun"
    },
    "explanation_vi": "Đáp án đúng là B: Không thể kiểm tra toàn diện"
  },
  {
    "id": 31,
    "topic": "Exam A",
    "question": "Which of the following is a correct statement regarding Quadrant Q2 of the testing quadrants?",
    "options": {
      "A": "It is technology facing, supports the team, and contains component and component integration tests",
      "B": "It is business facing, critiques the product, and contains exploratory and usability testing",
      "C": "It is technology facing, critiques the product, and contains the smoke tests and performance tests",
      "D": "It is business facing, supports the team, and contains functional tests and API tests"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: It is business facing, supports the team, and contains functional tests and API tests",
    "question_vi": "Phát biểu nào sau đây là đúng về Góc phần tư Q2 của các góc phần tư thử nghiệm?",
    "options_vi": {
      "A": "Nó hướng tới công nghệ, hỗ trợ nhóm và chứa các thử nghiệm tích hợp thành phần và thành phần",
      "B": "Nó hướng tới hoạt động kinh doanh, phê bình sản phẩm và bao gồm thử nghiệm thăm dò và khả năng sử dụng",
      "C": "Nó đối mặt với công nghệ, phê bình sản phẩm và bao gồm các bài kiểm tra khói và kiểm tra hiệu suất",
      "D": "Nó phù hợp với hoạt động kinh doanh, hỗ trợ nhóm và chứa các bài kiểm tra chức năng và kiểm tra API"
    },
    "explanation_vi": "Đáp án đúng là D: Đó là công việc kinh doanh, hỗ trợ nhóm và chứa các bài kiểm tra chức năng và kiểm tra API"
  },
  {
    "id": 32,
    "topic": "Exam A",
    "question": "Which of the following provides two defined risk response actions to help control product risk?",
    "options": {
      "A": "Deny risk, Mitigate risk by testing",
      "B": "Accept risk, Abandon risk",
      "C": "Abandon risk, Delay risk",
      "D": "Transfer risk, Accept risk"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Transfer risk, Accept risk",
    "question_vi": "Điều nào sau đây cung cấp hai hành động ứng phó rủi ro được xác định để giúp kiểm soát rủi ro sản phẩm?",
    "options_vi": {
      "A": "Từ chối rủi ro, Giảm thiểu rủi ro bằng thử nghiệm",
      "B": "Chấp nhận rủi ro, từ bỏ rủi ro",
      "C": "Rủi ro từ bỏ, rủi ro trì hoãn",
      "D": "Chuyển giao rủi ro, Chấp nhận rủi ro"
    },
    "explanation_vi": "Đáp án đúng là D: Chuyển giao rủi ro, Chấp nhận rủi ro"
  },
  {
    "id": 33,
    "topic": "Exam A",
    "question": "Your company has been working in a waterfall lifecycle model. They have now decided to implement DevOps and will be using CI/CD. Which of the following is a change that will be required from the testing team?",
    "options": {
      "A": "No change is required. The current approach will still be applicable.",
      "B": "There will be additional emphasis on test automation to supply continuous testing.",
      "C": "Additional time will be needed to analyze the requirements and design test cases.",
      "D": "There will be a need for less technical testers because the developers will handle all the technical testing."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: There will be additional emphasis on test automation to supply continuous testing.",
    "question_vi": "Công ty của bạn đang làm việc theo mô hình vòng đời thác nước. Hiện họ đã quyết định triển khai DevOps và sẽ sử dụng CI/CD. Điều nào sau đây là sự thay đổi sẽ được yêu cầu từ nhóm thử nghiệm?",
    "options_vi": {
      "A": "Không cần thay đổi. Cách tiếp cận hiện tại vẫn sẽ được áp dụng.",
      "B": "Sẽ có thêm sự nhấn mạnh vào tự động hóa thử nghiệm để cung cấp thử nghiệm liên tục.",
      "C": "Sẽ cần thêm thời gian để phân tích các yêu cầu và thiết kế các trường hợp thử nghiệm.",
      "D": "Sẽ cần ít người kiểm tra kỹ thuật hơn vì các nhà phát triển sẽ xử lý tất cả các thử nghiệm kỹ thuật."
    },
    "explanation_vi": "Câu trả lời đúng là B: Sẽ chú trọng hơn vào tự động hóa thử nghiệm để cung cấp thử nghiệm liên tục."
  },
  {
    "id": 34,
    "topic": "Exam A",
    "question": "Testing can be seen as a destructive activity. Which of the following generic skills will help a tester overcome this barrier?",
    "options": {
      "A": "Analytical thinking",
      "B": "Communicating with empathy",
      "C": "Curiosity",
      "D": "Tool knowledge"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Communicating with empathy",
    "question_vi": "Thử nghiệm có thể được coi là một hoạt động mang tính phá hoại. Kỹ năng chung nào sau đây sẽ giúp người thử nghiệm vượt qua rào cản này?",
    "options_vi": {
      "A": "Tư duy phân tích",
      "B": "Giao tiếp bằng sự đồng cảm",
      "C": "Tò mò",
      "D": "Kiến thức công cụ"
    },
    "explanation_vi": "Đáp án đúng là B: Giao tiếp bằng sự đồng cảm"
  },
  {
    "id": 35,
    "topic": "Exam A",
    "question": "If a developer is analyzing a failure to determine the cause, he is engaging in what type of activity?",
    "options": {
      "A": "Testing",
      "B": "Design and Analysis",
      "C": "Debugging",
      "D": "Configuration management"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Debugging",
    "question_vi": "Nếu một nhà phát triển đang phân tích lỗi để xác định nguyên nhân thì anh ta đang tham gia vào loại hoạt động nào?",
    "options_vi": {
      "A": "Kiểm tra",
      "B": "Thiết kế và phân tích",
      "C": "Gỡ lỗi",
      "D": "Quản lý cấu hình"
    },
    "explanation_vi": "Đáp án đúng là C: Debugging"
  },
  {
    "id": 36,
    "topic": "Exam A",
    "question": "If test cases are written in the given/when/then format, what type of test-first software development is being used?",
    "options": {
      "A": "Test-driven development",
      "B": "Acceptance test-driven development",
      "C": "Business-driven development",
      "D": "Behavior-driven development"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Behavior-driven development",
    "question_vi": "Nếu các trường hợp kiểm thử được viết theo định dạng nhất định/khi/thì thì loại phát triển phần mềm kiểm thử đầu tiên nào đang được sử dụng?",
    "options_vi": {
      "A": "Phát triển dựa trên thử nghiệm",
      "B": "Phát triển dựa trên thử nghiệm chấp nhận",
      "C": "Phát triển theo định hướng kinh doanh",
      "D": "Phát triển theo hướng hành vi"
    },
    "explanation_vi": "Đáp án đúng là D: Phát triển theo hướng hành vi"
  },
  {
    "id": 37,
    "topic": "Exam A",
    "question": "Which of the following is a valid test objective?",
    "options": {
      "A": "Finding the stable areas of the code which do not require testing",
      "B": "Debugging incidents to determine the cause of the problem",
      "C": "Finding failures and defects in the test object",
      "D": "Participating in code reviews to improve scripting skills"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Finding failures and defects in the test object",
    "question_vi": "Mục tiêu nào sau đây là mục tiêu thử nghiệm hợp lệ?",
    "options_vi": {
      "A": "Tìm các vùng mã ổn định không cần kiểm tra",
      "B": "Gỡ lỗi sự cố để xác định nguyên nhân của sự cố",
      "C": "Tìm lỗi và khiếm khuyết trong đối tượng thử nghiệm",
      "D": "Tham gia review code để nâng cao kỹ năng viết script"
    },
    "explanation_vi": "Đáp án đúng là C: Tìm lỗi, khiếm khuyết trong đối tượng test"
  },
  {
    "id": 38,
    "topic": "Exam A",
    "question": "You are a functional tester, performing system testing of a flight reservation application. After logging into the system, you selected the “New Reservation” option on the main menu, and clicked the “Submit” button without making any changes to the default values on the screen. The system charged your test credit card for $523.00 instead of the expected $1046.00. This happens every time you execute the test case. You are entering a defect into your system, and submitting it to development for correction. Your defect report currently includes: The date of the incident The identity of the tester who discovered the incident The steps executed to cause the incident, noting 100% reproducibility The impact on the system and the priority of the defect The expected and actual results What information is missing from this defect report?",
    "options": {
      "A": "The test environment in which the test was executed",
      "B": "Test case expected results",
      "C": "The name of the developer who should have caught their error in unit testing",
      "D": "Frequency of occurrence"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: The test environment in which the test was executed",
    "question_vi": "Bạn là người kiểm tra chức năng, thực hiện kiểm tra hệ thống của ứng dụng đặt vé máy bay. Sau khi đăng nhập vào hệ thống, bạn chọn tùy chọn “Đặt chỗ mới” trên menu chính và nhấp vào nút “Gửi” mà không thực hiện bất kỳ thay đổi nào đối với các giá trị mặc định trên màn hình. Hệ thống đã tính phí thẻ tín dụng thử nghiệm của bạn với số tiền $523,00 thay vì $1046,00 dự kiến. Điều này xảy ra mỗi khi bạn thực hiện trường hợp thử nghiệm. Bạn đang nhập một lỗi vào hệ thống của mình và gửi nó cho bộ phận phát triển để sửa chữa. Báo cáo lỗi của bạn hiện bao gồm: Ngày xảy ra sự cố Danh tính của người kiểm tra đã phát hiện ra sự cố Các bước được thực hiện để gây ra sự cố, lưu ý khả năng tái tạo 100% Tác động lên hệ thống và mức độ ưu tiên của lỗi Kết quả mong đợi và thực tế Thông tin nào còn thiếu trong báo cáo lỗi này?",
    "options_vi": {
      "A": "Môi trường thử nghiệm trong đó thử nghiệm được thực hiện",
      "B": "Trường hợp thử nghiệm kết quả mong đợi",
      "C": "Tên của nhà phát triển lẽ ra đã mắc lỗi khi kiểm thử đơn vị",
      "D": "Tần suất xuất hiện"
    },
    "explanation_vi": "Đáp án đúng là A: Môi trường kiểm thử nơi kiểm thử được thực hiện"
  },
  {
    "id": 39,
    "topic": "Exam A",
    "question": "Which of the following is an example of a test work product?",
    "options": {
      "A": "Test plan",
      "B": "Test platform selection",
      "C": "Code base",
      "D": "Test tool selection"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Test plan",
    "question_vi": "Điều nào sau đây là ví dụ về sản phẩm công việc thử nghiệm?",
    "options_vi": {
      "A": "kế hoạch kiểm tra",
      "B": "Lựa chọn nền tảng thử nghiệm",
      "C": "Cơ sở mã",
      "D": "Lựa chọn công cụ kiểm tra"
    },
    "explanation_vi": "Đáp án đúng là A: Test plan"
  },
  {
    "id": 40,
    "topic": "Exam A",
    "question": "You are getting ready to test software that will be used to dispatch spa pool technicians. You have decided to use a decision table to determine when chemicals will be needed and when maintenance functions should be performed. You have been given the following requirements: 1. Spa pools need chemicals checked and added once a week. 2. Spa pool filters must be cleaned once a month. 3. Technicians should add chemicals and clean filters for an emergency maintenance call. You have created the conditions part of the decision table: Given this information, which of the following is the correct set of actions indicated by this decision table? 1. 2. 3. 4.",
    "options": {
      "A": "1 is correct",
      "B": "2 is correct",
      "C": "3 is correct",
      "D": "4 is correct"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: 3 is correct",
    "question_vi": "Bạn đang chuẩn bị thử nghiệm phần mềm sẽ được sử dụng để cử kỹ thuật viên hồ bơi spa đến. Bạn đã quyết định sử dụng bảng quyết định để xác định khi nào cần sử dụng hóa chất và khi nào nên thực hiện các chức năng bảo trì. Bạn đã được đưa ra các yêu cầu sau: 1. Hồ bơi spa cần kiểm tra và bổ sung hóa chất mỗi tuần một lần. 2. Bộ lọc bể bơi spa phải được làm sạch mỗi tháng một lần. 3. Kỹ thuật viên nên thêm hóa chất và làm sạch bộ lọc khi thực hiện cuộc gọi bảo trì khẩn cấp. Bạn đã tạo phần điều kiện của bảng quyết định: Với thông tin này, tập hợp hành động nào sau đây là tập hợp chính xác được chỉ ra bởi bảng quyết định này? 1. 2. 3. 4.",
    "options_vi": {
      "A": "1 là đúng",
      "B": "2 là đúng",
      "C": "3 là đúng",
      "D": "4 là đúng"
    },
    "explanation_vi": "Lời giải đúng là C:3 đúng"
  },
  {
    "id": 41,
    "topic": "Exam A",
    "question": "You have been given the following story: As a help desk worker I want to enter a caller’s birth date So the system can display the caller’s account information As a team, you have developed the following table of acceptance criteria: You have developed the following test cases and will execute them in the specified order: 1. Enter a valid date and verify that the account retrieved matches the birth date entered. 2. Enter an invalid date and verify that the error indicates the date is invalid. 3. Verify that the date prompt is already formatted for the date with xx/xx/xx format. 4. Enter a valid date and verify that two pages of account information are readable. 5. Enter a valid date and verify that the response occurs within 2 seconds when the system is under an average load. What is incorrect about this approach?",
    "options": {
      "A": "The security test case should be executed first as it is related to access control",
      "B": "The test cases are not accepting the test criteria",
      "C": "The test cases are not being executed in the proper order",
      "D": "The test cases do not indicate the expected result"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: The test cases are not being executed in the proper order",
    "question_vi": "Bạn đã được kể câu chuyện sau: Là nhân viên bộ phận trợ giúp, tôi muốn nhập ngày sinh của người gọi Để hệ thống có thể hiển thị thông tin tài khoản của người gọi Với tư cách là một nhóm, bạn đã phát triển bảng tiêu chí chấp nhận sau: Bạn đã phát triển các trường hợp kiểm thử sau và sẽ thực hiện chúng theo thứ tự đã chỉ định: 1. Nhập ngày hợp lệ và xác minh rằng tài khoản được truy xuất khớp với ngày sinh đã nhập. 2. Nhập ngày không hợp lệ và xác minh rằng lỗi cho biết ngày đó không hợp lệ. 3. Xác minh rằng lời nhắc ngày đã được định dạng cho ngày có định dạng xx/xx/xx. 4. Nhập ngày hợp lệ và xác minh rằng hai trang thông tin tài khoản có thể đọc được. 5. Nhập ngày hợp lệ và xác minh rằng phản hồi xảy ra trong vòng 2 giây khi hệ thống ở mức tải trung bình. Điều gì sai trong cách tiếp cận này?",
    "options_vi": {
      "A": "Trường hợp kiểm tra bảo mật phải được thực hiện trước tiên vì nó liên quan đến kiểm soát truy cập",
      "B": "Các trường hợp kiểm thử không chấp nhận tiêu chí kiểm thử",
      "C": "Các trường hợp thử nghiệm không được thực hiện theo đúng thứ tự",
      "D": "Các trường hợp thử nghiệm không cho biết kết quả mong đợi"
    },
    "explanation_vi": "Đáp án đúng là C: Các ca kiểm thử không được thực hiện theo đúng thứ tự"
  },
  {
    "id": 42,
    "topic": "Exam A",
    "question": "Which of the following provides two defined risk response actions to help control product risk?",
    "options": {
      "A": "Deny risk, Cancel risk",
      "B": "Accept risk, Abandon risk",
      "C": "Abandon risk, Delay risk",
      "D": "Transfer risk, Accept risk"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Transfer risk, Accept risk",
    "question_vi": "Điều nào sau đây cung cấp hai hành động ứng phó rủi ro được xác định để giúp kiểm soát rủi ro sản phẩm?",
    "options_vi": {
      "A": "Từ chối rủi ro, Hủy bỏ rủi ro",
      "B": "Chấp nhận rủi ro, từ bỏ rủi ro",
      "C": "Rủi ro từ bỏ, rủi ro trì hoãn",
      "D": "Chuyển giao rủi ro, Chấp nhận rủi ro"
    },
    "explanation_vi": "Đáp án đúng là D: Chuyển giao rủi ro, Chấp nhận rủi ro"
  },
  {
    "id": 43,
    "topic": "Exam A",
    "question": "A typical objective of testing is to:",
    "options": {
      "A": "Determine the most appropriate level of detail with which to design test cases.",
      "B": "Verify the compliance of the test object with regulatory requirements.",
      "C": "Plan test activities in accordance with the existing test policy and test strategy.",
      "D": "Verify the correct creation and configuration of the test environment."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Verify the compliance of the test object with regulatory requirements.",
    "question_vi": "Mục tiêu điển hình của thử nghiệm là:",
    "options_vi": {
      "A": "Xác định mức độ chi tiết phù hợp nhất để thiết kế các ca kiểm thử.",
      "B": "Xác minh sự tuân thủ của đối tượng thử nghiệm với các yêu cầu quy định.",
      "C": "Lập kế hoạch hoạt động kiểm tra phù hợp với chính sách kiểm tra và chiến lược kiểm tra hiện có.",
      "D": "Xác minh việc tạo và cấu hình chính xác của môi trường thử nghiệm."
    },
    "explanation_vi": "Đáp án đúng là B: Xác minh sự tuân thủ của đối tượng thử nghiệm với các yêu cầu quy định."
  },
  {
    "id": 44,
    "topic": "Exam A",
    "question": "Exploratory testing is an experience-based test technique:",
    "options": {
      "A": "Where a developer and a tester work together on the same workstation: while the developer actively writes code, the tester explores the code to find defects.",
      "B": "That can be organized into sessions guided by test charters outlining test objectives that will guide the testers' exploration.",
      "C": "Where a team of testers explores all possible test techniques in order to determine the most suitable combination of these techniques to apply for a test project.",
      "D": "That aims at finding defects by designing tests that exercise all possible combinations of input values and preconditions."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: That can be organized into sessions guided by test charters outlining test objectives that will guide the testers' exploration.",
    "question_vi": "Thử nghiệm thăm dò là một kỹ thuật thử nghiệm dựa trên kinh nghiệm:",
    "options_vi": {
      "A": "Khi nhà phát triển và người kiểm tra làm việc cùng nhau trên cùng một máy trạm: trong khi nhà phát triển tích cực viết mã, người kiểm tra sẽ khám phá mã để tìm ra lỗi.",
      "B": "Điều đó có thể được tổ chức thành các phiên được hướng dẫn bởi các điều lệ thử nghiệm phác thảo các mục tiêu thử nghiệm sẽ hướng dẫn người thử nghiệm khám phá.",
      "C": "Khi một nhóm người thử nghiệm khám phá tất cả các kỹ thuật thử nghiệm có thể có để xác định sự kết hợp phù hợp nhất của các kỹ thuật này để áp dụng cho một dự án thử nghiệm.",
      "D": "Điều đó nhằm mục đích tìm ra lỗi bằng cách thiết kế các bài kiểm tra thực hiện tất cả các kết hợp có thể có của giá trị đầu vào và điều kiện tiên quyết."
    },
    "explanation_vi": "Đáp án đúng là B: Phần đó có thể được tổ chức thành các buổi học được hướng dẫn bởi các điều lệ kiểm tra nêu rõ các mục tiêu kiểm tra sẽ hướng dẫn người kiểm tra khám phá."
  },
  {
    "id": 45,
    "topic": "Exam A",
    "question": "Which of the following is an advantage of the whole team approach?",
    "options": {
      "A": "It helps avoid the risk of tasks associated with a user story not moving through the Agile task board at an acceptable rate during an iteration.",
      "B": "It helps team members understand the current status of an iteration by visualizing the amount of work left to do compared to the time allotted for the iteration.",
      "C": "It helps the whole team be more effective in test case design by requiring all team members to master all types of test techniques.",
      "D": "It helps team members develop better relationships with each other and make their collaboration more effective for the benefit of the Project."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: It helps team members develop better relationships with each other and make their collaboration more effective for the benefit of the Project.",
    "question_vi": "Điều nào sau đây là ưu điểm của cách tiếp cận toàn nhóm?",
    "options_vi": {
      "A": "Nó giúp tránh nguy cơ các nhiệm vụ liên quan đến câu chuyện của người dùng không di chuyển qua bảng nhiệm vụ Agile ở tốc độ chấp nhận được trong suốt quá trình lặp lại.",
      "B": "Nó giúp các thành viên trong nhóm hiểu được trạng thái hiện tại của một lần lặp bằng cách trực quan hóa lượng công việc còn lại phải làm so với thời gian được phân bổ cho lần lặp đó.",
      "C": "Nó giúp cả nhóm hiệu quả hơn trong việc thiết kế trường hợp kiểm thử bằng cách yêu cầu tất cả các thành viên trong nhóm nắm vững tất cả các loại kỹ thuật kiểm thử.",
      "D": "Nó giúp các thành viên trong nhóm phát triển mối quan hệ tốt hơn với nhau và làm cho sự cộng tác của họ hiệu quả hơn vì lợi ích của Dự án."
    },
    "explanation_vi": "Đáp án đúng là D: Nó giúp các thành viên trong nhóm phát triển mối quan hệ tốt hơn với nhau và làm cho sự hợp tác của họ hiệu quả hơn vì lợi ích của Dự án."
  },
  {
    "id": 46,
    "topic": "Exam A",
    "question": "Which of the following statements about checklist-based testing is TRUE?",
    "options": {
      "A": "Checklist-based testing is a technique for managing the review meeting that can be applied in those reviews where the use of checklists is mandatory, as is often the case in formal reviews.",
      "B": "Checklist-based testing is a review technique that can be used in a formal review process where reviewers, during individual review, try to detect issues within the work product based on a checklist.",
      "C": "In checklist-based testing, using checklists at a high level of detail is more likely to produce test cases that are easier to reproduce than those using checklists at a low level of detail.",
      "D": "Checklists used in checklist-based testing should be reviewed periodically for updates as, over time, test cases designed using the same checklist may become less effective at finding defects."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Checklists used in checklist-based testing should be reviewed periodically for updates as, over time, test cases designed using the same checklist may become less effective at finding defects.",
    "question_vi": "Câu nào sau đây về kiểm tra dựa trên danh sách kiểm tra là ĐÚNG?",
    "options_vi": {
      "A": "Kiểm tra dựa trên danh sách kiểm tra là một kỹ thuật quản lý cuộc họp đánh giá có thể được áp dụng trong những cuộc đánh giá mà việc sử dụng danh sách kiểm tra là bắt buộc, như trường hợp thường thấy trong các đánh giá chính thức.",
      "B": "Kiểm tra dựa trên danh sách kiểm tra là một kỹ thuật đánh giá có thể được sử dụng trong quy trình đánh giá chính thức, trong đó người đánh giá, trong quá trình đánh giá cá nhân, cố gắng phát hiện các vấn đề trong sản phẩm công việc dựa trên danh sách kiểm tra.",
      "C": "Trong thử nghiệm dựa trên danh sách kiểm tra, việc sử dụng danh sách kiểm tra ở mức độ chi tiết cao có nhiều khả năng tạo ra các trường hợp thử nghiệm dễ tái tạo hơn so với việc sử dụng danh sách kiểm tra ở mức độ chi tiết thấp.",
      "D": "Danh sách kiểm tra được sử dụng trong kiểm thử dựa trên danh sách kiểm tra phải được xem xét định kỳ để cập nhật vì theo thời gian, các trường hợp kiểm thử được thiết kế sử dụng cùng một danh sách kiểm tra có thể trở nên kém hiệu quả hơn trong việc tìm ra lỗi."
    },
    "explanation_vi": "Đáp án đúng là D: Danh sách kiểm tra được sử dụng trong kiểm thử dựa trên danh sách kiểm tra phải được xem xét định kỳ để cập nhật vì theo thời gian, các trường hợp kiểm thử được thiết kế sử dụng cùng một danh sách kiểm tra có thể trở nên kém hiệu quả hơn trong việc tìm ra lỗi."
  },
  {
    "id": 47,
    "topic": "Exam A",
    "question": "An application is subjected to a constant load for an extended period of time as part of a performance test. While running this test, the response time of the application steadily slows down, which results in a requirement not being met. This slowdown is caused by a memory leak where the application code does not properly release some of the dynamically allocated memory when it is no longer needed. Which of the following statements is TRUE?",
    "options": {
      "A": "The slowdown is a failure while the memory leak is a defect.",
      "B": "The slowdown is a defect while the memory leak is an error.",
      "C": "The slowdown is an error, the memory leak is a defect.",
      "D": "The slowdown is a defect; the memory leak is a failure."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: The slowdown is a failure while the memory leak is a defect.",
    "question_vi": "Một ứng dụng phải chịu tải không đổi trong một khoảng thời gian dài như một phần của quá trình kiểm tra hiệu suất. Trong khi chạy thử nghiệm này, thời gian phản hồi của ứng dụng chậm dần, dẫn đến yêu cầu không được đáp ứng. Sự chậm lại này là do rò rỉ bộ nhớ trong đó mã ứng dụng không giải phóng đúng cách một số bộ nhớ được phân bổ động khi không còn cần thiết nữa. Câu nào sau đây là ĐÚNG?",
    "options_vi": {
      "A": "Sự chậm lại là một lỗi trong khi rò rỉ bộ nhớ là một khiếm khuyết.",
      "B": "Sự chậm lại là một khiếm khuyết trong khi rò rỉ bộ nhớ là một lỗi.",
      "C": "Máy chạy chậm là lỗi, rò rỉ bộ nhớ là lỗi.",
      "D": "Sự chậm lại là một khiếm khuyết; rò rỉ bộ nhớ là một lỗi."
    },
    "explanation_vi": "Đáp án đúng là A: Làm chậm là lỗi còn rò rỉ bộ nhớ là lỗi."
  },
  {
    "id": 48,
    "topic": "Exam A",
    "question": "Which of the following statements is TRUE?",
    "options": {
      "A": "User acceptance tests are usually automated and aim to verify the acceptance criteria for user stories.",
      "B": "Acceptance criteria for user stories can include details on data definitions, for example by describing the format, allowed values, and default values for a data item.",
      "C": "Acceptance criteria for user stories should focus on positive scenarios, while negative scenarios should be excluded.",
      "D": "Tests derived from acceptance criteria for user stories are not included in any of the four testing quadrants."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Acceptance criteria for user stories can include details on data definitions, for example by describing the format, allowed values, and default values for a data item.",
    "question_vi": "Câu nào sau đây là ĐÚNG?",
    "options_vi": {
      "A": "Các bài kiểm tra chấp nhận của người dùng thường được tự động hóa và nhằm mục đích xác minh các tiêu chí chấp nhận cho các câu chuyện của người dùng.",
      "B": "Tiêu chí chấp nhận cho câu chuyện của người dùng có thể bao gồm chi tiết về định nghĩa dữ liệu, ví dụ bằng cách mô tả định dạng, giá trị được phép và giá trị mặc định cho một mục dữ liệu.",
      "C": "Tiêu chí chấp nhận cho câu chuyện của người dùng nên tập trung vào các tình huống tích cực, trong khi nên loại trừ các tình huống tiêu cực.",
      "D": "Các thử nghiệm bắt nguồn từ tiêu chí chấp nhận cho các câu chuyện của người dùng không được bao gồm trong bất kỳ góc phần tư nào trong bốn góc phần tư thử nghiệm."
    },
    "explanation_vi": "Đáp án đúng là B: Tiêu chí chấp nhận cho câu chuyện của người dùng có thể bao gồm chi tiết về định nghĩa dữ liệu, ví dụ bằng cách mô tả định dạng, giá trị được phép và giá trị mặc định cho một mục dữ liệu."
  },
  {
    "id": 49,
    "topic": "Exam A",
    "question": "In addition to thorough testing of the requirements specification, a development team aims to involve users as early as possible in the development process, using practices such as prototyping, to ensure that the software systems being developed will meet the users’ expectations. This approach is especially useful at mitigating the risks associated with one of the seven testing principles, which one?",
    "options": {
      "A": "Tests wear out.",
      "B": "Absence-of-errors fallacy.",
      "C": "Working software over comprehensive documentation.",
      "D": "Defects cluster together."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Absence-of-errors fallacy.",
    "question_vi": "Ngoài việc kiểm tra kỹ lưỡng các đặc tả yêu cầu, nhóm phát triển còn hướng đến việc thu hút người dùng tham gia vào quá trình phát triển càng sớm càng tốt, sử dụng các phương pháp thực hành như tạo mẫu, để đảm bảo rằng hệ thống phần mềm đang được phát triển sẽ đáp ứng mong đợi của người dùng. Cách tiếp cận này đặc biệt hữu ích trong việc giảm thiểu rủi ro liên quan đến một trong bảy nguyên tắc thử nghiệm, đó là nguyên tắc nào?",
    "options_vi": {
      "A": "Các bài kiểm tra bị hao mòn.",
      "B": "Ngụy biện không có lỗi.",
      "C": "Phần mềm làm việc trên tài liệu toàn diện.",
      "D": "Các khuyết tật cụm lại với nhau."
    },
    "explanation_vi": "Câu trả lời đúng là B: Ngụy biện không có lỗi."
  },
  {
    "id": 50,
    "topic": "Exam A",
    "question": "A requirement specifies that a certain identifier (ID) must be between 5 and 10 characters long, must contain only alphanumeric characters, and its first character must be a letter. As a tester, you want to apply one-dimensional equivalence partitioning to test this ID. This means that you have to apply equivalence partitioning individually: to the length of the ID, the type of characters contained within the ID, and the type of the first character of the ID. What is the number of partitions to cover?",
    "options": {
      "A": "7",
      "B": "6",
      "C": "5",
      "D": "3"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: 7",
    "question_vi": "Một yêu cầu chỉ định rằng một mã định danh (ID) nhất định phải dài từ 5 đến 10 ký tự, chỉ được chứa các ký tự chữ và số và ký tự đầu tiên của nó phải là một chữ cái. Là người thử nghiệm, bạn muốn áp dụng phân vùng tương đương một chiều để kiểm tra ID này. Điều này có nghĩa là bạn phải áp dụng phân vùng tương đương riêng lẻ: theo độ dài của ID, loại ký tự có trong ID và loại ký tự đầu tiên của ID. Số lượng phân vùng cần che là bao nhiêu?",
    "options_vi": {
      "A": "7",
      "B": "6",
      "C": "5",
      "D": "3"
    },
    "explanation_vi": "Câu trả lời đúng là A: 7"
  },
  {
    "id": 51,
    "topic": "Exam A",
    "question": "Determining the schedule for each testing activity and test milestones for a test project, using activity estimates, available resources, and other constraints is a typical task performed during:",
    "options": {
      "A": "Test execution.",
      "B": "Test design.",
      "C": "Test analysis.",
      "D": "Test planning."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Test planning.",
    "question_vi": "Xác định lịch trình cho từng hoạt động thử nghiệm và các mốc kiểm tra cho một dự án thử nghiệm, sử dụng ước tính hoạt động, nguồn lực sẵn có và các ràng buộc khác là một nhiệm vụ điển hình được thực hiện trong:",
    "options_vi": {
      "A": "Thực hiện thử nghiệm.",
      "B": "Thiết kế thử nghiệm.",
      "C": "Phân tích thử nghiệm.",
      "D": "Lập kế hoạch kiểm tra."
    },
    "explanation_vi": "Đáp án đúng là D: Lập kế hoạch kiểm tra."
  },
  {
    "id": 52,
    "topic": "Exam A",
    "question": "A requirement specifies that if the total amount of sales (TAS) made during the year by a corporate seller is 300,000€ or more, the bonus that must be paid to the seller is 100% of a certain amount agreed upon at the beginning of the year. The software contains a fault as it implements this requirement with the decision \"IF (TAS = 300,000)\" instead of \"IF (TAS >= 300,000)\". The application of the 3-value boundary value analysis to this problem consists of the following three test cases (TAS is an integer variable): TC1 = 299,999 TC2=300,000 TC=300,001 Which of the following statements is TRUE?",
    "options": {
      "A": "TC1 would highlight the fault.",
      "B": "TC2 would highlight the fault.",
      "C": "TC3 would highlight the fault.",
      "D": "None of the three test cases would highlight the fault."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: TC3 would highlight the fault.",
    "question_vi": "Một yêu cầu quy định rằng nếu tổng số tiền bán hàng (TAS) được thực hiện trong năm bởi người bán là công ty là 300.000 € trở lên thì tiền thưởng phải trả cho người bán là 100% số tiền nhất định đã thỏa thuận vào đầu năm. Phần mềm có lỗi khi thực hiện yêu cầu này với quyết định “IF (TAS = 300.000)” thay vì “IF (TAS >= 300.000)”. Việc áp dụng phân tích giá trị biên 3 giá trị cho bài toán này bao gồm ba trường hợp thử nghiệm sau (TAS là biến số nguyên): TC1 = 299.999 TC2=300.000 TC=300.001 Câu nào sau đây là ĐÚNG?",
    "options_vi": {
      "A": "TC1 sẽ nêu rõ lỗi.",
      "B": "TC2 sẽ nêu rõ lỗi.",
      "C": "TC3 sẽ nêu rõ lỗi.",
      "D": "Không có trường hợp nào trong ba trường hợp kiểm thử nêu bật được lỗi."
    },
    "explanation_vi": "Đáp án đúng là C: TC3 sẽ highlight lỗi."
  },
  {
    "id": 53,
    "topic": "Exam A",
    "question": "A document describes the test procedures that have been derived for the identified test sets. Among other things, the order in which the test cases in the corresponding test set are to be executed according to the dependencies described by preconditions and postconditions is specified. This document is a typical work product produced as part of:",
    "options": {
      "A": "Test design.",
      "B": "Test analysis.",
      "C": "Test implementation.",
      "D": "Test monitoring and control."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Test implementation.",
    "question_vi": "Một tài liệu mô tả các quy trình thử nghiệm được rút ra từ các bộ thử nghiệm đã được xác định. Trong số những thứ khác, thứ tự thực hiện các trường hợp kiểm thử trong bộ kiểm thử tương ứng theo các phụ thuộc được mô tả bởi các điều kiện tiên quyết và hậu điều kiện được chỉ định. Tài liệu này là một sản phẩm công việc điển hình được tạo ra như một phần của:",
    "options_vi": {
      "A": "Thiết kế thử nghiệm.",
      "B": "Phân tích thử nghiệm.",
      "C": "Triển khai thử nghiệm.",
      "D": "Giám sát và kiểm soát thử nghiệm."
    },
    "explanation_vi": "Câu trả lời đúng là C: Thực hiện thử nghiệm."
  },
  {
    "id": 54,
    "topic": "Exam A",
    "question": "Which of the following types of tools is BEST suited for determining source code compliance with the guidelines provided by a coding standard?",
    "options": {
      "A": "Containerization tool.",
      "B": "Fault seeding tool.",
      "C": "Static analysis tool.",
      "D": "Test data preparation tool."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Static analysis tool.",
    "question_vi": "Loại công cụ nào sau đây phù hợp nhất để xác định sự tuân thủ của mã nguồn với các nguyên tắc do tiêu chuẩn mã hóa cung cấp?",
    "options_vi": {
      "A": "Công cụ container hóa.",
      "B": "Công cụ gieo hạt lỗi.",
      "C": "Công cụ phân tích tĩnh.",
      "D": "Công cụ chuẩn bị dữ liệu thử nghiệm."
    },
    "explanation_vi": "Đáp án đúng là C: Công cụ phân tích tĩnh."
  },
  {
    "id": 55,
    "topic": "Exam A",
    "question": "Which of the following statements about traceability is FALSE?",
    "options": {
      "A": "Traceability between test basis items and the test cases designed to cover them, makes it possible to determine which test basis items have been covered by the executed test cases.",
      "B": "Traceability between test basis items and the test cases designed to cover them, enables experience-based test techniques to be applied.",
      "C": "Traceability between test basis items and the test cases designed to cover them, enables identification of which test cases will be affected by changes to the test basis items.",
      "D": "Traceability can be established and maintained through all the test documentation for a given test level, such as from test conditions through test cases to test scripts."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Traceability between test basis items and the test cases designed to cover them, enables experience-based test techniques to be applied.",
    "question_vi": "Câu nào sau đây về truy xuất nguồn gốc là SAI?",
    "options_vi": {
      "A": "Khả năng truy nguyên giữa các hạng mục cơ sở kiểm thử và các trường hợp kiểm thử được thiết kế để bao trùm chúng, giúp xác định các hạng mục cơ sở kiểm thử nào đã được bao phủ bởi các trường hợp kiểm thử đã thực hiện.",
      "B": "Khả năng truy xuất nguồn gốc giữa các hạng mục cơ sở kiểm thử và các trường hợp kiểm thử được thiết kế để bao trùm chúng, cho phép áp dụng các kỹ thuật kiểm thử dựa trên kinh nghiệm.",
      "C": "Khả năng truy nguyên giữa các hạng mục cơ sở kiểm thử và các ca kiểm thử được thiết kế để bao trùm chúng, cho phép xác định trường hợp kiểm thử nào sẽ bị ảnh hưởng bởi những thay đổi đối với các hạng mục cơ sở kiểm thử.",
      "D": "Khả năng truy xuất nguồn gốc có thể được thiết lập và duy trì thông qua tất cả các tài liệu kiểm thử cho một mức độ kiểm thử nhất định, chẳng hạn như từ các điều kiện kiểm thử cho đến các trường hợp kiểm thử đến các kịch bản kiểm thử."
    },
    "explanation_vi": "Đáp án đúng là B: Khả năng truy xuất nguồn gốc giữa các hạng mục cơ sở kiểm thử và các trường hợp kiểm thử được thiết kế để bao trùm chúng, cho phép áp dụng các kỹ thuật kiểm thử dựa trên kinh nghiệm."
  },
  {
    "id": 56,
    "topic": "Exam A",
    "question": "Which of the following is a typical potential risk of using test automation tools?",
    "options": {
      "A": "Reduced feedback times regarding software quality compared to manual testing.",
      "B": "Reduced test execution times compared to manual testing.",
      "C": "Reduced repeatability and consistency of tests compared to manual testing.",
      "D": "Underestimation of effort required to maintain test scripts."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Underestimation of effort required to maintain test scripts.",
    "question_vi": "Điều nào sau đây là rủi ro tiềm ẩn điển hình khi sử dụng các công cụ tự động hóa thử nghiệm?",
    "options_vi": {
      "A": "Giảm thời gian phản hồi về chất lượng phần mềm so với kiểm tra thủ công.",
      "B": "Giảm thời gian thực hiện kiểm thử so với kiểm thử thủ công.",
      "C": "Giảm độ lặp lại và tính nhất quán của các bài kiểm tra so với kiểm tra thủ công.",
      "D": "Đánh giá thấp nỗ lực cần thiết để duy trì các kịch bản kiểm thử."
    },
    "explanation_vi": "Đáp án đúng là D: Đánh giá thấp nỗ lực cần thiết để duy trì kịch bản kiểm thử."
  },
  {
    "id": 57,
    "topic": "Exam A",
    "question": "A typical generic skill required for the role of tester is the ability to:",
    "options": {
      "A": "Take on the role of developer to meet challenging project deadlines.",
      "B": "Assume leadership aimed at imposing decisions on the rest of the team.",
      "C": "Use tools to make the execution of repetitive testing tasks more efficient.",
      "D": "Determine the corrective actions to get a test project on track in case of deviations from the test plan."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Use tools to make the execution of repetitive testing tasks more efficient.",
    "question_vi": "Một kỹ năng chung điển hình cần có cho vai trò của người thử nghiệm là khả năng:",
    "options_vi": {
      "A": "Đảm nhận vai trò nhà phát triển để đáp ứng thời hạn đầy thách thức của dự án.",
      "B": "Đảm nhận vai trò lãnh đạo nhằm áp đặt các quyết định cho những người còn lại trong nhóm.",
      "C": "Sử dụng các công cụ để thực hiện các nhiệm vụ kiểm tra lặp đi lặp lại hiệu quả hơn.",
      "D": "Xác định các hành động khắc phục để đưa dự án thử nghiệm đi đúng hướng trong trường hợp có sai lệch so với kế hoạch thử nghiệm."
    },
    "explanation_vi": "Đáp án đúng là C: Sử dụng các công cụ để thực hiện các nhiệm vụ kiểm tra lặp đi lặp lại hiệu quả hơn."
  },
  {
    "id": 58,
    "topic": "Exam A",
    "question": "As a tester, as part of a V-model project, you are currently executing some tests aimed at verifying if a mobile app asks the user to grant the proper access permissions during the installation process and after the installation process. The requirements specification states that in both cases the app shall ask the user to grant access permissions only to the camera and photos stored on the device. However, you observe that the app also asks the user to grant access permission to all contacts on the device. Consider the following items: [I]. Test environment. [II]. Expected result. [III]. Actual result. [IV]. Test level. [V]. Root cause. Based on only the given information, which of the items listed above, are you able to CORRECTLY specify in a defect report?",
    "options": {
      "A": "[I] and [II].",
      "B": "[II] and [III].",
      "C": "[II], [III] and [V].",
      "D": "[I], [IV] and [V]."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: [II] and [III].",
    "question_vi": "Với tư cách là người thử nghiệm, là một phần của dự án mô hình chữ V, bạn hiện đang thực hiện một số thử nghiệm nhằm xác minh xem ứng dụng dành cho thiết bị di động có yêu cầu người dùng cấp quyền truy cập thích hợp trong quá trình cài đặt và sau quá trình cài đặt hay không. Đặc tả yêu cầu nêu rõ rằng trong cả hai trường hợp, ứng dụng sẽ yêu cầu người dùng chỉ cấp quyền truy cập vào máy ảnh và ảnh được lưu trữ trên thiết bị. Tuy nhiên, bạn nhận thấy rằng ứng dụng cũng yêu cầu người dùng cấp quyền truy cập cho tất cả danh bạ trên thiết bị. Hãy xem xét các mục sau: [I]. Môi trường thử nghiệm. [II]. Kết quả mong đợi. [III]. Kết quả thực tế. [IV]. Mức độ kiểm tra. [V]. Nguyên nhân gốc rễ. Chỉ dựa vào thông tin đã cho, mục nào trong số các mục được liệt kê ở trên, bạn có thể chỉ định ĐÚNG trong báo cáo lỗi không?",
    "options_vi": {
      "A": "[Tôi] và [II].",
      "B": "[II] và [III].",
      "C": "[II], [III] và [V].",
      "D": "[I], [IV] và [V]."
    },
    "explanation_vi": "Câu trả lời đúng là B: [II] và [III]."
  },
  {
    "id": 59,
    "topic": "Exam A",
    "question": "Which of the following statements refers to a good testing practice that applies to all software development lifecycles?",
    "options": {
      "A": "Each test level should have its own specific test objectives that should be consistent with the software development lifecycle phase or type of activities it addresses.",
      "B": "Test analysis and design for any test levels should begin as soon as coding is complete, and all system components are available for testing.",
      "C": "The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.",
      "D": "All the tests should be automated and run as part of the continuous integration process with every software change."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Each test level should have its own specific test objectives that should be consistent with the software development lifecycle phase or type of activities it addresses.",
    "question_vi": "Câu nào sau đây đề cập đến một phương pháp kiểm thử tốt áp dụng cho tất cả vòng đời phát triển phần mềm?",
    "options_vi": {
      "A": "Mỗi cấp độ kiểm thử phải có mục tiêu kiểm thử cụ thể riêng phù hợp với giai đoạn vòng đời phát triển phần mềm hoặc loại hoạt động mà nó giải quyết.",
      "B": "Việc phân tích và thiết kế thử nghiệm cho bất kỳ cấp độ thử nghiệm nào phải bắt đầu ngay sau khi quá trình mã hóa hoàn tất và tất cả các thành phần hệ thống đều có sẵn để thử nghiệm.",
      "C": "Phương pháp hiệu quả và hiệu quả nhất để truyền đạt thông tin đến và trong nhóm phát triển là trò chuyện trực tiếp.",
      "D": "Tất cả các thử nghiệm phải được tự động hóa và chạy như một phần của quá trình tích hợp liên tục với mọi thay đổi phần mềm."
    },
    "explanation_vi": "Đáp án đúng là A: Mỗi cấp độ kiểm tra phải có mục tiêu kiểm tra cụ thể riêng phù hợp với giai đoạn vòng đời phát triển phần mềm hoặc loại hoạt động mà nó giải quyết."
  },
  {
    "id": 60,
    "topic": "Exam A",
    "question": "The following decision table is used to assist a doctor in determining the drug therapy to prescribe for a patient (aged 6 to 65 years) diagnosed with acute sinusitis. The table consists of three Boolean conditions and six actions: Based only on the given information, which of the following statements is TRUE?",
    "options": {
      "A": "Column 7 represents an impossible situation and thus can be deleted.",
      "B": "Columns 1 and 3 can be merged into a single column.",
      "C": "Columns 2, 4, 6 and 8 can be merged into a single column.",
      "D": "Columns 5 and 7 can be merged into a single column."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Columns 2, 4, 6 and 8 can be merged into a single column.",
    "question_vi": "Bảng quyết định sau đây được sử dụng để hỗ trợ bác sĩ xác định liệu pháp điều trị bằng thuốc để kê đơn cho bệnh nhân (từ 6 đến 65 tuổi) được chẩn đoán mắc bệnh viêm xoang cấp tính. Bảng bao gồm ba điều kiện Boolean và sáu hành động: Chỉ dựa trên thông tin đã cho, câu nào sau đây là ĐÚNG?",
    "options_vi": {
      "A": "Cột 7 thể hiện một tình huống không thể thực hiện được và do đó có thể bị xóa.",
      "B": "Cột 1 và 3 có thể gộp thành một cột duy nhất.",
      "C": "Các cột 2, 4, 6 và 8 có thể gộp lại thành một cột duy nhất.",
      "D": "Cột 5 và 7 có thể gộp thành một cột duy nhất."
    },
    "explanation_vi": "Đáp án đúng là C: Cột 2, 4, 6 và 8 có thể gộp thành một cột duy nhất."
  },
  {
    "id": 61,
    "topic": "Exam A",
    "question": "Which of the following statements about TDD, BDD and ATDD is TRUE?",
    "options": {
      "A": "Refactoring is a practice that is an integral part of TDD and is applied both to tests and to code written to satisfy those tests.",
      "B": "ATDD is a black-box test design technique that is applicable exclusively at acceptance test level.",
      "C": "BDD is a developer practice where business stakeholders are not usually involved as the tests are directly written at unit/component test level.",
      "D": "ATDD is the practice of running the automated acceptance tests as part of a continuous integration process."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Refactoring is a practice that is an integral part of TDD and is applied both to tests and to code written to satisfy those tests.",
    "question_vi": "Câu nào sau đây về TDD, BDD và ATDD là ĐÚNG?",
    "options_vi": {
      "A": "Tái cấu trúc là một phương pháp thực hành là một phần không thể thiếu của TDD và được áp dụng cho cả các bài kiểm tra và mã được viết để đáp ứng các bài kiểm tra đó.",
      "B": "ATDD là một kỹ thuật thiết kế kiểm thử hộp đen được áp dụng riêng ở cấp độ kiểm thử chấp nhận.",
      "C": "BDD là hoạt động của nhà phát triển trong đó các bên liên quan trong kinh doanh thường không tham gia vì các bài kiểm tra được viết trực tiếp ở cấp độ kiểm tra đơn vị/thành phần.",
      "D": "ATDD là phương pháp thực hiện các thử nghiệm chấp nhận tự động như một phần của quy trình tích hợp liên tục."
    },
    "explanation_vi": "Đáp án đúng là A: Tái cấu trúc là một phương pháp thực hành là một phần không thể thiếu của TDD và được áp dụng cho cả các bài kiểm tra và mã được viết để đáp ứng các bài kiểm tra đó."
  },
  {
    "id": 62,
    "topic": "Exam A",
    "question": "An anti-intrusion system is battery powered and is activated by pressing the only available button. To deactivate the system, the operator must enter a PIN code. The system will stay in alert mode within a configurable timeout and an alarm bell will ring if the system is not deactivated before the timeout expires. The following state transition diagram describes the behavior of the system: What is the minimum number of test cases needed to cover every unique sequence of exactly 4 states / 3 transitions starting and ending in the “Inactive” state? (note that “Inactive” is not a final state in the diagram).",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: 2",
    "question_vi": "Hệ thống chống xâm nhập chạy bằng pin và được kích hoạt bằng cách nhấn nút duy nhất có sẵn. Để tắt hệ thống, người vận hành phải nhập mã PIN. Hệ thống sẽ ở chế độ cảnh báo trong khoảng thời gian chờ có thể định cấu hình và chuông báo động sẽ reo nếu hệ thống không bị tắt trước khi hết thời gian chờ. Sơ đồ chuyển đổi trạng thái sau đây mô tả hành vi của hệ thống: Số lượng ca kiểm thử tối thiểu cần thiết để bao gồm mỗi chuỗi duy nhất có chính xác 4 trạng thái/3 lần chuyển đổi bắt đầu và kết thúc ở trạng thái “Không hoạt động” là bao nhiêu? (lưu ý rằng “Không hoạt động” không phải là trạng thái cuối cùng trong sơ đồ).",
    "options_vi": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "explanation_vi": "Câu trả lời đúng là B: 2"
  },
  {
    "id": 63,
    "topic": "Exam A",
    "question": "Which of the following statements is TRUE?",
    "options": {
      "A": "Unlike functional testing, non-functional testing can only be applied to conventional systems, not artificial intelligence-based system.",
      "B": "Functional testing focuses on what the system is supposed to do, while white-box testing focuses on how well the system does what it is supposed to do.",
      "C": "Functional testing can be applied to all test levels, while non-functional testing can be applied only to system and acceptance test levels.",
      "D": "Black-box test techniques and experience-based test techniques may be applicable to both functional testing and non-functional testing."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Black-box test techniques and experience-based test techniques may be applicable to both functional testing and non-functional testing.",
    "question_vi": "Câu nào sau đây là ĐÚNG?",
    "options_vi": {
      "A": "Không giống như kiểm thử chức năng, kiểm thử phi chức năng chỉ có thể áp dụng cho các hệ thống thông thường chứ không thể áp dụng cho hệ thống dựa trên trí tuệ nhân tạo.",
      "B": "Kiểm thử chức năng tập trung vào những gì hệ thống phải làm, trong khi kiểm thử hộp trắng tập trung vào việc hệ thống thực hiện tốt những gì nó phải làm.",
      "C": "Kiểm tra chức năng có thể được áp dụng cho tất cả các cấp độ kiểm tra, trong khi kiểm tra phi chức năng chỉ có thể được áp dụng cho các cấp độ kiểm tra hệ thống và chấp nhận.",
      "D": "Kỹ thuật kiểm thử hộp đen và kỹ thuật kiểm thử dựa trên kinh nghiệm có thể được áp dụng cho cả kiểm thử chức năng và kiểm thử phi chức năng."
    },
    "explanation_vi": "Đáp án đúng là D: Kỹ thuật kiểm thử hộp đen và kỹ thuật kiểm thử dựa trên kinh nghiệm có thể áp dụng cho cả kiểm thử chức năng và kiểm thử phi chức năng."
  },
  {
    "id": 64,
    "topic": "Exam A",
    "question": "Consider the following user story about an e-commerce website's registration feature that only allows registered users to make purchases: “As a new user, | want to register to the website, so that | can start shopping online” The following are some of the acceptance criteria defined for the user story: [a] The registration form consists of the following fields: username, email address, first name, last name, date of birth, password and repeat password. [b] To submit the registration request, the new user must fill in all the fields of the registration form with valid values and must agree to the terms and conditions. [c] To be valid, the email address must not be provided by free online mail services that allow to create disposable email addresses. A dedicated error message must be presented to inform the new user when an invalid address is entered. [d] To be valid, the first name and last name must contain only alphabetic characters and must be between 2 and 80 characters long. A dedicated error message must be presented to inform the new user when an invalid first name and/or the last name is entered. [e] After submitting the registration request, the new user must receive an e-mail containing the confirmation link to the e-mail address specified in the registration form. Based only on the given information, which of the following ATDD tests is MOST LIKELY to be written first?",
    "options": {
      "A": "The new user enters valid values in the fields of the registration form, except for the email address, where he/she enters an e-mail address provided by a free online mail service that allow to create disposable email addresses. Then he/she is informed by the website about this issue.",
      "B": "The new user enters valid values in the fields of the registration form, except for the first name, where he/she enters a first name with 10 characters that contains a number. Then he/she is informed by the website about this issue.",
      "C": "The user accesses the website with a username and password, and successfully places a purchase order for five items, paying by Mastercard credit card.",
      "D": "The new user enters valid values in all the fields of the registration form, confirms to accept all the terms and conditions, submits the registration request and then receives an e-mail containing the confirmation link to the e-mail address specified in the registration form."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: The new user enters valid values in all the fields of the registration form, confirms to accept all the terms and conditions, submits the registration request and then receives an e-mail containing the confirmation link to the e-mail address specified in the registration form.",
    "question_vi": "Hãy xem xét câu chuyện của người dùng sau đây về tính năng đăng ký của một trang web thương mại điện tử chỉ cho phép người dùng đã đăng ký mua hàng: “Là người dùng mới, | muốn đăng ký vào trang web, để | có thể bắt đầu mua sắm trực tuyến” Sau đây là một số tiêu chí chấp nhận được xác định cho câu chuyện của người dùng: [a] Biểu mẫu đăng ký bao gồm các trường sau: tên người dùng, địa chỉ email, tên, họ, ngày sinh, mật khẩu và mật khẩu lặp lại. [b] Để gửi yêu cầu đăng ký, người dùng mới phải điền vào tất cả các trường của mẫu đăng ký với các giá trị hợp lệ và phải đồng ý với các điều khoản và điều kiện. [c] Để hợp lệ, địa chỉ email không được cung cấp bởi các dịch vụ thư trực tuyến miễn phí cho phép tạo địa chỉ email dùng một lần. Một thông báo lỗi chuyên dụng phải được đưa ra để thông báo cho người dùng mới khi nhập địa chỉ không hợp lệ. [d] Để hợp lệ, họ và tên chỉ được chứa các ký tự chữ cái và phải dài từ 2 đến 80 ký tự. Một thông báo lỗi chuyên dụng phải được đưa ra để thông báo cho người dùng mới khi nhập tên và/hoặc họ không hợp lệ. [e] Sau khi gửi yêu cầu đăng ký, người dùng mới phải nhận được e-mail chứa liên kết xác nhận đến địa chỉ e-mail được chỉ định trong mẫu đăng ký. Chỉ dựa trên thông tin đã cho, bài kiểm tra ATDD nào sau đây CÓ KHẢ NĂNG được viết đầu tiên nhất?",
    "options_vi": {
      "A": "Người dùng mới nhập các giá trị hợp lệ vào các trường của biểu mẫu đăng ký, ngoại trừ địa chỉ email, nơi họ nhập địa chỉ email được cung cấp bởi dịch vụ thư trực tuyến miễn phí cho phép tạo địa chỉ email dùng một lần. Sau đó anh ấy/cô ấy được trang web thông báo về vấn đề này.",
      "B": "Người dùng mới nhập các giá trị hợp lệ vào các trường của biểu mẫu đăng ký, ngoại trừ tên, trong đó họ nhập tên có 10 ký tự chứa một số. Sau đó anh ấy/cô ấy được trang web thông báo về vấn đề này.",
      "C": "Người dùng truy cập trang web bằng tên người dùng và mật khẩu và đặt mua thành công năm mặt hàng, thanh toán bằng thẻ tín dụng Mastercard.",
      "D": "Người dùng mới nhập các giá trị hợp lệ vào tất cả các trường của biểu mẫu đăng ký, xác nhận chấp nhận tất cả các điều khoản và điều kiện, gửi yêu cầu đăng ký và sau đó nhận được e-mail chứa liên kết xác nhận đến địa chỉ e-mail được chỉ định trong biểu mẫu đăng ký."
    },
    "explanation_vi": "Đáp án đúng là D: Người dùng mới nhập các giá trị hợp lệ vào tất cả các trường của mẫu đăng ký, xác nhận chấp nhận tất cả các điều khoản và điều kiện, gửi yêu cầu đăng ký và sau đó nhận được e-mail chứa liên kết xác nhận đến địa chỉ e-mail được chỉ định trong mẫu đăng ký."
  },
  {
    "id": 65,
    "topic": "Exam A",
    "question": "After being in operation for many years, a document management system must be decommissioned as it has reached its end of life. This system will not be replaced by any other new system. A legal obligation provides that all documents within the system must be kept for at least 20 years in a state archive. Which of the following statements about maintenance testing for decommissioning of this system is TRUE?",
    "options": {
      "A": "No maintenance testing is required as this system will not be replaced.",
      "B": "Data migration testing is required as part of maintenance testing.",
      "C": "Confirmation testing is required as part of maintenance testing.",
      "D": "Regression testing is required as part of maintenance testing."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Data migration testing is required as part of maintenance testing.",
    "question_vi": "Sau khi hoạt động được nhiều năm, một hệ thống quản lý tài liệu phải ngừng hoạt động vì nó đã hết tuổi thọ. Hệ thống này sẽ không được thay thế bởi bất kỳ hệ thống mới nào khác. Nghĩa vụ pháp lý quy định rằng tất cả tài liệu trong hệ thống phải được lưu giữ ít nhất 20 năm trong kho lưu trữ nhà nước. Câu nào sau đây về việc kiểm tra bảo trì để ngừng hoạt động hệ thống này là ĐÚNG?",
    "options_vi": {
      "A": "Không cần kiểm tra bảo trì vì hệ thống này sẽ không được thay thế.",
      "B": "Kiểm tra di chuyển dữ liệu là cần thiết như một phần của kiểm tra bảo trì.",
      "C": "Kiểm tra xác nhận là cần thiết như một phần của kiểm tra bảo trì.",
      "D": "Kiểm tra hồi quy là cần thiết như một phần của kiểm tra bảo trì."
    },
    "explanation_vi": "Đáp án đúng là B: Kiểm tra di chuyển dữ liệu là bắt buộc như một phần của kiểm tra bảo trì."
  },
  {
    "id": 66,
    "topic": "Exam A",
    "question": "Which of the following statements about the test pyramid is TRUE?",
    "options": {
      "A": "Each layer of the test pyramid groups tests related to a single non-functional quality characteristic.",
      "B": "The higher the layer of the test pyramid, the more production code a single automated test within the layer tends to cover.",
      "C": "The higher the layer of the test pyramid, the more maintainable a single automated test within the layer tends to be.",
      "D": "The higher the layer of the test pyramid, the more isolated a single automated test within the layer tends to be."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: The higher the layer of the test pyramid, the more production code a single automated test within the layer tends to cover.",
    "question_vi": "Câu nào sau đây về kim tự tháp kiểm tra là ĐÚNG?",
    "options_vi": {
      "A": "Mỗi lớp của nhóm kim tự tháp kiểm tra kiểm tra liên quan đến một đặc tính chất lượng phi chức năng duy nhất.",
      "B": "Lớp của kim tự tháp kiểm tra càng cao thì mã sản xuất mà một bài kiểm tra tự động duy nhất trong lớp đó có xu hướng bao phủ càng nhiều.",
      "C": "Lớp của kim tự tháp kiểm tra càng cao thì một bài kiểm tra tự động duy nhất trong lớp càng có xu hướng dễ bảo trì hơn.",
      "D": "Lớp của kim tự tháp kiểm tra càng cao thì một bài kiểm tra tự động đơn lẻ trong lớp càng có xu hướng tách biệt."
    },
    "explanation_vi": "Câu trả lời đúng là B: Lớp của kim tự tháp kiểm tra càng cao thì mã sản xuất mà một bài kiểm tra tự động duy nhất trong lớp có xu hướng bao phủ càng nhiều."
  },
  {
    "id": 67,
    "topic": "Exam A",
    "question": "Which of the following statements about retrospectives is TRUE?",
    "options": {
      "A": "Only developers and testers should be involved in retrospectives, as involving people in other roles is very likely to prevent developers and testers from having open and constructive discussions that really help identify process improvements.",
      "B": "Retrospectives can be very effective in identifying process improvements and can also be very efficient and cost-effective especially since, unlike reviews, they do not require any follow-up activities.",
      "C": "On Agile projects, well-conducted retrospectives at the end of each iteration can help the team reduce and sometimes even eliminate the need for daily stand-up meetings.",
      "D": "During retrospectives, in addition to identifying relevant process improvements, participants should also consider how to implement these improvements and retain them based on the context of the project, such as the software development lifecycle."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: During retrospectives, in addition to identifying relevant process improvements, participants should also consider how to implement these improvements and retain them based on the context of the project, such as the software development lifecycle.",
    "question_vi": "Câu nào sau đây về quá khứ là ĐÚNG?",
    "options_vi": {
      "A": "Chỉ các nhà phát triển và người thử nghiệm mới nên tham gia vào quá trình cải tiến, vì việc lôi kéo những người ở các vai trò khác rất có thể ngăn cản các nhà phát triển và người thử nghiệm có những cuộc thảo luận cởi mở và mang tính xây dựng nhằm thực sự giúp xác định các cải tiến quy trình.",
      "B": "Hồi cứu có thể rất hiệu quả trong việc xác định các cải tiến quy trình và cũng có thể rất hiệu quả và tiết kiệm chi phí, đặc biệt vì, không giống như đánh giá, chúng không yêu cầu bất kỳ hoạt động tiếp theo nào.",
      "C": "Trong các dự án Agile, các buổi cải tiến được tiến hành tốt vào cuối mỗi lần lặp lại có thể giúp nhóm giảm bớt và đôi khi thậm chí loại bỏ nhu cầu tổ chức các cuộc họp độc lập hàng ngày.",
      "D": "Trong quá trình hồi cứu, ngoài việc xác định các cải tiến quy trình liên quan, người tham gia cũng nên xem xét cách triển khai những cải tiến này và duy trì chúng dựa trên bối cảnh của dự án, chẳng hạn như vòng đời phát triển phần mềm."
    },
    "explanation_vi": "Đáp án đúng là D: Trong quá trình hồi cứu, ngoài việc xác định các cải tiến quy trình có liên quan, người tham gia cũng nên xem xét cách triển khai những cải tiến này và duy trì chúng dựa trên bối cảnh của dự án, chẳng hạn như vòng đời phát triển phần mềm."
  },
  {
    "id": 68,
    "topic": "Exam A",
    "question": "Which of the following about typical information found within a test plan is FALSE?",
    "options": {
      "A": "The need to temporarily have additional test personnel available for specific test phases and/or test activities.",
      "B": "The conditions that must be met in order for the test execution activities to be considered completed.",
      "C": "The list of the product risks which have not been fully mitigated at the end of test execution.",
      "D": "The conditions that must be met for part of all the planned activities to be suspended and resumed."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: The list of the product risks which have not been fully mitigated at the end of test execution.",
    "question_vi": "Thông tin nào sau đây về thông tin điển hình được tìm thấy trong kế hoạch kiểm thử là SAI?",
    "options_vi": {
      "A": "Nhu cầu tạm thời có thêm nhân viên kiểm thử cho các giai đoạn kiểm thử và/hoặc hoạt động kiểm thử cụ thể.",
      "B": "Các điều kiện phải được đáp ứng để các hoạt động thực hiện kiểm thử được coi là hoàn thành.",
      "C": "Danh sách các rủi ro sản phẩm chưa được giảm thiểu hoàn toàn khi kết thúc quá trình thực hiện thử nghiệm.",
      "D": "Các điều kiện phải được đáp ứng để một phần của tất cả các hoạt động theo kế hoạch sẽ bị tạm dừng và tiếp tục."
    },
    "explanation_vi": "Đáp án đúng là C: Danh sách các rủi ro của sản phẩm chưa được giảm thiểu hoàn toàn khi kết thúc quá trình thực hiện kiểm thử."
  },
  {
    "id": 69,
    "topic": "Exam A",
    "question": "Which of the following statements about the shift-left approach is FALSE?",
    "options": {
      "A": "The shift-left approach can only be implemented with test automation.",
      "B": "The shift-left approach in testing is compatible with DevOps practices.",
      "C": "The shift-left approach can involve security vulnerabilities.",
      "D": "The shift-left approach can be supported by static analysis tools."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: The shift-left approach can only be implemented with test automation.",
    "question_vi": "Phát biểu nào sau đây về phương pháp dịch trái là SAI?",
    "options_vi": {
      "A": "Cách tiếp cận dịch chuyển trái chỉ có thể được thực hiện bằng tự động hóa thử nghiệm.",
      "B": "Cách tiếp cận dịch chuyển sang trái trong thử nghiệm tương thích với thực tiễn DevOps.",
      "C": "Cách tiếp cận dịch chuyển trái có thể liên quan đến các lỗ hổng bảo mật.",
      "D": "Cách tiếp cận dịch chuyển trái có thể được hỗ trợ bởi các công cụ phân tích tĩnh."
    },
    "explanation_vi": "Đáp án đúng là A: Cách tiếp cận dịch chuyển sang trái chỉ có thể được thực hiện bằng kiểm thử tự động."
  },
  {
    "id": 70,
    "topic": "Exam A",
    "question": "Which of the following statements about the testing quadrants is TRUE?",
    "options": {
      "A": "The higher the number of the testing quadrant, the more important the tests associated with this quadrant are.",
      "B": "Automated acceptance tests produced during BDD and ATDD are classified in quadrant Q2.",
      "C": "Exploratory tests are classified in quadrant Q3, and they are usually included in a continuous integration process.",
      "D": "Automated unit tests produced during TDD are classified in quadrant Q4 as they are technology facing."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Automated acceptance tests produced during BDD and ATDD are classified in quadrant Q2.",
    "question_vi": "Câu nào sau đây về các góc phần tư thử nghiệm là ĐÚNG?",
    "options_vi": {
      "A": "Số lượng góc phần tư thử nghiệm càng cao thì các bài kiểm tra liên quan đến góc phần tư này càng quan trọng.",
      "B": "Các thử nghiệm chấp nhận tự động được tạo ra trong BDD và ATDD được phân loại trong góc phần tư Q2.",
      "C": "Các thử nghiệm thăm dò được phân loại trong góc phần tư Q3 và chúng thường được đưa vào quá trình tích hợp liên tục.",
      "D": "Các bài kiểm tra đơn vị tự động được tạo ra trong TDD được phân loại vào góc phần tư Q4 vì chúng phải đối mặt với công nghệ."
    },
    "explanation_vi": "Đáp án đúng là B: Các bài kiểm tra chấp nhận tự động được tạo ra trong BDD và ATDD được phân loại vào góc phần tư Q2."
  },
  {
    "id": 71,
    "topic": "Exam A",
    "question": "Which of the following is a role that is usually responsible for documenting the findings (e.g., action items, decisions, recommendations) made by the review team as part of a typical formal review?",
    "options": {
      "A": "Review leader.",
      "B": "Facilitator.",
      "C": "Recorder.",
      "D": "Moderator."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Recorder.",
    "question_vi": "Vai trò nào sau đây thường chịu trách nhiệm ghi lại các phát hiện (ví dụ: các mục hành động, quyết định, khuyến nghị) do nhóm đánh giá đưa ra như một phần của đánh giá chính thức điển hình?",
    "options_vi": {
      "A": "Lãnh đạo xem xét.",
      "B": "Người hướng dẫn.",
      "C": "Máy ghi âm.",
      "D": "Người điều hành."
    },
    "explanation_vi": "Đáp án đúng là C: Recorder."
  },
  {
    "id": 72,
    "topic": "Exam A",
    "question": "Consider the following examples of risks identified in different software development projects: [I]. It may not be possible to generate the expected workloads to run performance tests, due to the poor hardware equipment of the machines (load injectors) that should generate these workloads. [II]. A user's session on a web application is not invalidated after a certain period of inactivity (configured by the system administrator) of the user. [III]. The test team will not have an adequate requirements specification (since many requirements will still be missing) by the time test design and analysis activities should begin according to the test plan. [IV]. Following a failure, the system is unable to continue to maintain its pre-failure operation and some data becomes corrupted. Which of the following statements is TRUE?",
    "options": {
      "A": "[II] and [IV] are product risks; [I] and [III] are project risks.",
      "B": "[II] and [III] are product risks; [I] and [IV] are project risks.",
      "C": "[I], and [IV] are product risks; [II] and [III] are project risks.",
      "D": "[I], [II] and [III] are product risks; [IV] is a project risk."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: [II] and [IV] are product risks; [I] and [III] are project risks.",
    "question_vi": "Hãy xem xét các ví dụ sau về rủi ro được xác định trong các dự án phát triển phần mềm khác nhau: [I]. Có thể không tạo được khối lượng công việc dự kiến ​​để chạy thử nghiệm hiệu năng do thiết bị phần cứng kém của máy (bộ phun tải) lẽ ra sẽ tạo ra khối lượng công việc này. [II]. Phiên của người dùng trên ứng dụng web không bị vô hiệu sau một khoảng thời gian không hoạt động nhất định (do quản trị viên hệ thống định cấu hình) của người dùng. [III]. Nhóm kiểm thử sẽ không có đặc tả yêu cầu đầy đủ (vì nhiều yêu cầu vẫn còn thiếu) vào thời điểm các hoạt động phân tích và thiết kế kiểm thử phải bắt đầu theo kế hoạch kiểm thử. [IV]. Sau khi xảy ra lỗi, hệ thống không thể tiếp tục duy trì hoạt động trước khi xảy ra lỗi và một số dữ liệu sẽ bị hỏng. Câu nào sau đây là ĐÚNG?",
    "options_vi": {
      "A": "[II] và [IV] là rủi ro sản phẩm; [I] và [III] là rủi ro của dự án.",
      "B": "[II] và [III] là rủi ro sản phẩm; [I] và [IV] là rủi ro của dự án.",
      "C": "[I] và [IV] là rủi ro sản phẩm; [II] và [III] là rủi ro của dự án.",
      "D": "[I], [II] và [III] là rủi ro sản phẩm; [IV] là rủi ro của dự án."
    },
    "explanation_vi": "Câu trả lời đúng là A: [II] và [IV] là rủi ro sản phẩm; [I] và [III] là rủi ro của dự án."
  },
  {
    "id": 73,
    "topic": "Exam A",
    "question": "Which of the following is a factor that contributes to a successful review?",
    "options": {
      "A": "All participants in the review are aware they will be evaluated based on the defects they will find.",
      "B": "The author of the work product to be reviewed leads the review meeting.",
      "C": "All participants in the review are trained to deal with the review type and its objectives.",
      "D": "Review metrics must be collected to improve the review process."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: All participants in the review are trained to deal with the review type and its objectives.",
    "question_vi": "Yếu tố nào sau đây góp phần tạo nên sự thành công của một cuộc đánh giá?",
    "options_vi": {
      "A": "Tất cả những người tham gia đánh giá đều biết rằng họ sẽ được đánh giá dựa trên những khiếm khuyết mà họ tìm thấy.",
      "B": "Tác giả của sản phẩm công việc được đánh giá chủ trì cuộc họp đánh giá.",
      "C": "Tất cả những người tham gia đánh giá đều được đào tạo để giải quyết loại đánh giá và mục tiêu của nó.",
      "D": "Các số liệu đánh giá phải được thu thập để cải thiện quá trình đánh giá."
    },
    "explanation_vi": "Đáp án đúng là C: Tất cả những người tham gia đánh giá đều được đào tạo để giải quyết loại đánh giá và mục tiêu của nó."
  },
  {
    "id": 74,
    "topic": "Exam A",
    "question": "A test status report SHOULD:",
    "options": {
      "A": "Specify the impediments to carrying out the planned test activities in the reporting period and the corresponding solutions put in place to remove them.",
      "B": "Be produced as part of test completion activities and report unmitigated product risks to support the decision whether or not to release the product.",
      "C": "Always be based on the same template within an organization, as its structure and contents should not be affected by the audience to which the report is presented.",
      "D": "Specify the lines of communication between testing, other lifecycle activities, and within the organization that were chosen at the outset of the test project."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Specify the impediments to carrying out the planned test activities in the reporting period and the corresponding solutions put in place to remove them.",
    "question_vi": "Báo cáo trạng thái thử nghiệm NÊN:",
    "options_vi": {
      "A": "Nêu rõ những trở ngại trong việc thực hiện các hoạt động thử nghiệm theo kế hoạch trong kỳ báo cáo và đưa ra các giải pháp tương ứng để loại bỏ chúng.",
      "B": "Được sản xuất như một phần của hoạt động hoàn thiện thử nghiệm và báo cáo các rủi ro sản phẩm không được giảm thiểu để hỗ trợ quyết định có phát hành sản phẩm hay không.",
      "C": "Luôn dựa trên cùng một khuôn mẫu trong một tổ chức vì cấu trúc và nội dung của tổ chức sẽ không bị ảnh hưởng bởi đối tượng tiếp nhận báo cáo.",
      "D": "Chỉ định các đường liên lạc giữa thử nghiệm, các hoạt động khác trong vòng đời và trong tổ chức đã được chọn ngay từ đầu dự án thử nghiệm."
    },
    "explanation_vi": "Đáp án đúng là A: Nêu rõ những trở ngại trong việc thực hiện các hoạt động thử nghiệm đã lên kế hoạch trong kỳ báo cáo và các giải pháp tương ứng được đưa ra để loại bỏ chúng."
  },
  {
    "id": 75,
    "topic": "Exam A",
    "question": "Which of the following statements about static testing and dynamic testing is TRUE?",
    "options": {
      "A": "Static testing is better suited than dynamic testing for highlighting issues that could indicate inappropriate code modularization.",
      "B": "Dynamic testing can only be applied to executable work products, while static testing can only be applied to non-executable work products.",
      "C": "Both dynamic testing and static testing cause failures, but failures caused by static testing are usually easier and cheaper to analyze.",
      "D": "Security vulnerabilities can only be detected when the software is being executed, and thus they can only be detected through dynamic testing, not through static testing."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Static testing is better suited than dynamic testing for highlighting issues that could indicate inappropriate code modularization.",
    "question_vi": "Câu nào sau đây về thử nghiệm tĩnh và thử nghiệm động là ĐÚNG?",
    "options_vi": {
      "A": "Thử nghiệm tĩnh phù hợp hơn thử nghiệm động để làm nổi bật các vấn đề có thể cho thấy việc mô-đun hóa mã không phù hợp.",
      "B": "Kiểm thử động chỉ có thể được áp dụng cho các sản phẩm công việc có thể thực thi được, trong khi thử nghiệm tĩnh chỉ có thể được áp dụng cho các sản phẩm công việc không thể thực thi được.",
      "C": "Cả thử nghiệm động và thử nghiệm tĩnh đều gây ra lỗi, nhưng các lỗi do thử nghiệm tĩnh gây ra thường dễ phân tích hơn và rẻ hơn.",
      "D": "Các lỗ hổng bảo mật chỉ có thể được phát hiện khi phần mềm đang được thực thi và do đó chúng chỉ có thể được phát hiện thông qua thử nghiệm động chứ không phải thông qua thử nghiệm tĩnh."
    },
    "explanation_vi": "Đáp án đúng là A: Kiểm thử tĩnh phù hợp hơn kiểm thử động trong việc nêu bật các vấn đề có thể cho thấy việc mô đun hóa mã không phù hợp."
  },
  {
    "id": 76,
    "topic": "Exam A",
    "question": "From a testing perspective, configuration management:",
    "options": {
      "A": "Allows the expected results to be compared with the actual results.",
      "B": "Allows the tracking of all changes to versions of the testware.",
      "C": "Includes all activities that direct and control an organization with regard to quality.",
      "D": "Focuses on configuring static analysis tools to choose the most suitable breadth and depth of analysis."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Allows the tracking of all changes to versions of the testware.",
    "question_vi": "Từ góc độ thử nghiệm, quản lý cấu hình:",
    "options_vi": {
      "A": "Cho phép so sánh kết quả dự kiến ​​với kết quả thực tế.",
      "B": "Cho phép theo dõi tất cả các thay đổi đối với các phiên bản của phần mềm kiểm tra.",
      "C": "Bao gồm tất cả các hoạt động chỉ đạo và kiểm soát một tổ chức về mặt chất lượng.",
      "D": "Tập trung vào việc định cấu hình các công cụ phân tích tĩnh để chọn độ rộng và độ sâu phân tích phù hợp nhất."
    },
    "explanation_vi": "Đáp án đúng là B: Cho phép theo dõi mọi thay đổi đối với các phiên bản của testware."
  },
  {
    "id": 77,
    "topic": "Exam A",
    "question": "Which of the following statements about the typical activities of a formal review process is TRUE?",
    "options": {
      "A": "Individual review is only mandatory when the size of the work product under review is too large to cover at the review meeting.",
      "B": "Various review techniques that may be applied by participants during individual review are described in the ISO/IEC/IEEE 29119-3 standard.",
      "C": "Choosing which standards to follow during the review process is usually made during review planning.",
      "D": "One of the main goals of the review meeting is to make sure that all participants are aware of their roles and responsibilities in the review process."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Choosing which standards to follow during the review process is usually made during review planning.",
    "question_vi": "Câu nào sau đây về các hoạt động điển hình của quy trình xem xét chính thức là ĐÚNG?",
    "options_vi": {
      "A": "Đánh giá cá nhân chỉ bắt buộc khi quy mô của sản phẩm công việc đang được xem xét quá lớn để có thể tham gia cuộc họp đánh giá.",
      "B": "Các kỹ thuật đánh giá khác nhau có thể được người tham gia áp dụng trong quá trình đánh giá riêng lẻ được mô tả trong tiêu chuẩn ISO/IEC/IEEE 29119-3.",
      "C": "Việc lựa chọn những tiêu chuẩn nào để tuân theo trong quá trình đánh giá thường được thực hiện trong quá trình lập kế hoạch đánh giá.",
      "D": "Một trong những mục tiêu chính của cuộc họp đánh giá là đảm bảo rằng tất cả những người tham gia đều nhận thức được vai trò và trách nhiệm của họ trong quá trình đánh giá."
    },
    "explanation_vi": "Đáp án đúng là C: Việc lựa chọn tiêu chuẩn nào để tuân theo trong quá trình rà soát thường được thực hiện trong quá trình lập kế hoạch rà soát."
  },
  {
    "id": 78,
    "topic": "Exam A",
    "question": "Consider an estimation session in which a six-member Agile team (Mempb1, ..., Memb6) uses the planning poker technique to estimate a user story (in story points). The team members will use a set of cards with the following values: 1, 2, 3, 5, 8, 13, 21. Below is the outcome of the first round of estimation for this session: Memb1 = 3 Memb2 = 3 Memb3 = 3 Memb4 = 21 Memb5 = 3 Memb6 = 1 Which of the following answers BEST describes how the estimation session should proceed?",
    "options": {
      "A": "The final estimate of the user story in story points is determined by applying the three-point estimation technique with the following input values: most optimistic estimate = 1, most likely estimate = 3, and most pessimistic estimate = 21.",
      "B": "Further estimation rounds should be performed until all team members will pick the card having the same value: this value will represent the final estimate of the user story in story points.",
      "C": "The final estimate of the user story in story points is determined by calculating the average value between the most optimistic estimate of 21 story points (Memb4) and the most pessimistic estimate of 1 story point (Memb6).",
      "D": "Memb6 and Memb4 which have produced the most pessimistic and the most optimistic estimates respectively, should explain the reasons of their choices to stimulate a discussion between all members before proceeding to another estimation round."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Memb6 and Memb4 which have produced the most pessimistic and the most optimistic estimates respectively, should explain the reasons of their choices to stimulate a discussion between all members before proceeding to another estimation round.",
    "question_vi": "Hãy xem xét một phiên ước tính trong đó nhóm Agile gồm sáu thành viên (Mempb1, ..., Memb6) sử dụng kỹ thuật lập kế hoạch poker để ước tính câu chuyện của người dùng (theo điểm câu chuyện). Các thành viên trong nhóm sẽ sử dụng một bộ thẻ có các giá trị sau: 1, 2, 3, 5, 8, 13, 21. Dưới đây là kết quả của vòng ước tính đầu tiên cho phần này: Memb1 = 3 Memb2 = 3 Memb3 = 3 Memb4 = 21 Memb5 = 3 Memb6 = 1 Câu trả lời nào sau đây mô tả TỐT NHẤT cách diễn ra phiên ước tính?",
    "options_vi": {
      "A": "Ước tính cuối cùng của câu chuyện của người dùng trong các điểm câu chuyện được xác định bằng cách áp dụng kỹ thuật ước tính ba điểm với các giá trị đầu vào sau: ước tính lạc quan nhất = 1, ước tính có khả năng nhất = 3 và ước tính bi quan nhất = 21.",
      "B": "Các vòng ước tính tiếp theo sẽ được thực hiện cho đến khi tất cả các thành viên trong nhóm chọn được thẻ có cùng giá trị: giá trị này sẽ thể hiện ước tính cuối cùng về câu chuyện của người dùng trong các điểm câu chuyện.",
      "C": "Ước tính cuối cùng của câu chuyện của người dùng theo điểm câu chuyện được xác định bằng cách tính giá trị trung bình giữa ước tính lạc quan nhất là 21 điểm câu chuyện (Memb4) và ước tính bi quan nhất là 1 điểm câu chuyện (Memb6).",
      "D": "Memb6 và Memb4 lần lượt đưa ra ước tính bi quan nhất và lạc quan nhất, nên giải thích lý do lựa chọn của mình để kích thích sự thảo luận giữa tất cả các thành viên trước khi tiến hành vòng ước tính khác."
    },
    "explanation_vi": "Đáp án đúng là D: Memb6 và Memb4 lần lượt đưa ra ước tính bi quan nhất và lạc quan nhất nên giải thích lý do lựa chọn của mình để kích thích sự thảo luận giữa các thành viên trước khi chuyển sang vòng ước tính khác."
  },
  {
    "id": 79,
    "topic": "Exam A",
    "question": "Which of the following answers describes a reason for adopting experience-based testing techniques?",
    "options": {
      "A": "Experience-based test techniques provide more systematic coverage criteria than black-box and white-box test techniques.",
      "B": "Experience-based test techniques completely rely on the tester’s past experience for designing test cases.",
      "C": "Experience-based test techniques allow designing test cases that are usually easier to reproduce than those designed with black-box and white-box test techniques.",
      "D": "Experience-based test techniques tend to find defects that may be difficult to find with black-box and white-box test techniques and are often useful to complement these more systematic techniques."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Experience-based test techniques tend to find defects that may be difficult to find with black-box and white-box test techniques and are often useful to complement these more systematic techniques.",
    "question_vi": "Câu trả lời nào sau đây mô tả lý do áp dụng các kỹ thuật kiểm tra dựa trên kinh nghiệm?",
    "options_vi": {
      "A": "Các kỹ thuật kiểm thử dựa trên kinh nghiệm cung cấp các tiêu chí bao quát có tính hệ thống hơn so với các kỹ thuật kiểm thử hộp đen và hộp trắng.",
      "B": "Các kỹ thuật kiểm thử dựa trên kinh nghiệm hoàn toàn dựa vào kinh nghiệm trước đây của người kiểm thử để thiết kế các trường hợp kiểm thử.",
      "C": "Các kỹ thuật kiểm thử dựa trên kinh nghiệm cho phép thiết kế các trường hợp kiểm thử thường dễ tái tạo hơn so với các trường hợp kiểm thử được thiết kế bằng kỹ thuật kiểm thử hộp đen và hộp trắng.",
      "D": "Các kỹ thuật kiểm thử dựa trên kinh nghiệm có xu hướng tìm ra các lỗi có thể khó tìm thấy bằng các kỹ thuật kiểm thử hộp đen và hộp trắng và thường hữu ích để bổ sung cho các kỹ thuật mang tính hệ thống hơn này."
    },
    "explanation_vi": "Đáp án đúng là D: Các kỹ thuật kiểm thử dựa trên kinh nghiệm có xu hướng tìm ra các lỗi có thể khó tìm thấy bằng các kỹ thuật kiểm thử hộp đen và hộp trắng và thường hữu ích để bổ sung cho các kỹ thuật mang tính hệ thống hơn này."
  },
  {
    "id": 80,
    "topic": "Exam A",
    "question": "For each test case to be executed, the following table specifies its dependencies and the required configuration of the test environment for running such test case: Assume that CONF1 is the initial configuration of the test environment. Based on this assumption, which of the following is a test execution schedule that is compatible with the specified dependencies and allows MINIMIZING the number of switches between the different configurations of the test environment?",
    "options": {
      "A": "TC4, TC3, TC2, TC1, TC5.",
      "B": "TC1, TC5, TC4, TC3, TC2.",
      "C": "TC4, TC3, TC2, TC5, TC1.",
      "D": "TC4, TC1, TC5, TC2, TC3."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: TC4, TC3, TC2, TC1, TC5.",
    "question_vi": "Đối với mỗi trường hợp kiểm thử sẽ được thực thi, bảng sau chỉ định các phụ thuộc của nó và cấu hình cần thiết của môi trường kiểm thử để chạy trường hợp kiểm thử đó: Giả sử rằng CONF1 là cấu hình ban đầu của môi trường kiểm thử. Dựa trên giả định này, điều nào sau đây là lịch thực hiện thử nghiệm tương thích với các phần phụ thuộc đã chỉ định và cho phép TỐI THIỂU số lượng chuyển đổi giữa các cấu hình khác nhau của môi trường thử nghiệm?",
    "options_vi": {
      "A": "TC4, TC3, TC2, TC1, TC5.",
      "B": "TC1, TC5, TC4, TC3, TC2.",
      "C": "TC4, TC3, TC2, TC5, TC1.",
      "D": "TC4, TC1, TC5, TC2, TC3."
    },
    "explanation_vi": "Đáp án đúng là A: TC4, TC3, TC2, TC1, TC5."
  },
  {
    "id": 81,
    "topic": "Exam A",
    "question": "Which of the following statements about white-box testing is FALSE?",
    "options": {
      "A": "Static testing can benefit from using code-related white-box test techniques during code reviews.",
      "B": "White-box testing allows suggesting test cases for increasing coverage levels which are based on objective measures.",
      "C": "Achieving full code coverage for a component or a system ensures that it has been fully tested.",
      "D": "Black-box testing can benefit from using code-related white-box test techniques to increase confidence in the code."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Achieving full code coverage for a component or a system ensures that it has been fully tested.",
    "question_vi": "Câu nào sau đây về kiểm thử hộp trắng là SAI?",
    "options_vi": {
      "A": "Kiểm tra tĩnh có thể được hưởng lợi từ việc sử dụng các kỹ thuật kiểm tra hộp trắng liên quan đến mã trong quá trình đánh giá mã.",
      "B": "Kiểm thử hộp trắng cho phép đề xuất các trường hợp kiểm thử để tăng mức độ bao phủ dựa trên các thước đo khách quan.",
      "C": "Việc đạt được phạm vi bao phủ mã đầy đủ cho một thành phần hoặc một hệ thống đảm bảo rằng nó đã được kiểm tra đầy đủ.",
      "D": "Kiểm thử hộp đen có thể được hưởng lợi từ việc sử dụng các kỹ thuật kiểm thử hộp trắng liên quan đến mã để tăng độ tin cậy của mã."
    },
    "explanation_vi": "Đáp án đúng là C: Đạt được phạm vi bao phủ mã đầy đủ cho một thành phần hoặc một hệ thống đảm bảo rằng nó đã được kiểm tra đầy đủ."
  },
  {
    "id": 82,
    "topic": "Exam A",
    "question": "Which of the following statements about statement coverage is TRUE?",
    "options": {
      "A": "Achieving 90% statement coverage ensures that 90% branch coverage is achieved.",
      "B": "Achieving 100% statement coverage ensures that no variable within the code has been used without being initialized.",
      "C": "Achieving 100% statement coverage ensures that 100% branch coverage is achieved.",
      "D": "Achieving 80% statement coverage ensures that 80% of all executable statements within the code have been exercised."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Achieving 80% statement coverage ensures that 80% of all executable statements within the code have been exercised.",
    "question_vi": "Phát biểu nào sau đây về mức độ bao phủ của phát biểu là ĐÚNG?",
    "options_vi": {
      "A": "Việc đạt được mức độ bao phủ câu lệnh 90% đảm bảo đạt được mức độ bao phủ 90% chi nhánh.",
      "B": "Việc đạt được mức độ bao phủ câu lệnh 100% đảm bảo rằng không có biến nào trong mã được sử dụng mà không được khởi tạo.",
      "C": "Việc đạt được mức độ bao phủ câu lệnh 100% đảm bảo đạt được mức độ bao phủ 100% chi nhánh.",
      "D": "Việc đạt được mức độ bao phủ câu lệnh 80% đảm bảo rằng 80% tất cả các câu lệnh thực thi trong mã đã được thực thi."
    },
    "explanation_vi": "Đáp án đúng là D: Đạt được 80% phạm vi câu lệnh đảm bảo rằng 80% tất cả các câu lệnh thực thi trong mã đã được thực thi."
  },
  {
    "id": 83,
    "topic": "Exam A",
    "question": "The following decision table is an excerpt of a larger decision table used to assist a doctor in determining the drug therapy to prescribe for a patient (aged 6 to 65 years) diagnosed with acute sinusitis. The table consists of four Boolean conditions and six actions: Based only on the given information, which of the following represent an impossible situation?",
    "options": {
      "A": "7",
      "B": "1",
      "C": "8",
      "D": "3"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: 8",
    "question_vi": "Bảng quyết định sau đây là phần trích của bảng quyết định lớn hơn được sử dụng để hỗ trợ bác sĩ xác định liệu pháp điều trị bằng thuốc để kê đơn cho bệnh nhân (từ 6 đến 65 tuổi) được chẩn đoán mắc bệnh viêm xoang cấp tính. Bảng bao gồm bốn điều kiện Boolean và sáu hành động: Chỉ dựa trên thông tin đã cho, điều nào sau đây thể hiện một tình huống không thể xảy ra?",
    "options_vi": {
      "A": "7",
      "B": "1",
      "C": "8",
      "D": "3"
    },
    "explanation_vi": "Câu trả lời đúng là C: 8"
  },
  {
    "id": 84,
    "topic": "Exam A",
    "question": "An anti-intrusion system is battery powered and is activated by pressing the only available button. To deactivate the system, the operator must enter a PIN code. The system will stay in alert mode within a configurable timeout and an alarm bell will ring if the system is not deactivated before the timeout expires. The following state transition diagram describes the behavior of the system: Assume that each test case has the following form, in which states are indicated in quotation marks and transitions in square brackets: “State 1”, [Transition 1], “State 2”, [Transition 2], …, “State N-1”, [Transition N-1], “State N”. Which of the following test cases, in addition to being valid, covers all states with minimal effort?",
    "options": {
      "A": "“Inactive”, [Press Button], “Active”, [Sensor Activated], “Alert Mode”, [Timeout expired], “Alarm bell rings”",
      "B": "“Inactive”, [Enter PIN], “Active”, [Sensor Activated], “Alert Mode”, [Timeout expired], “Alarm bell rings”",
      "C": "“Inactive”, [Press Button], “Active”, [Press Button], “Active”, [Sensor Activated], “Alert Mode”, [Timeout expired], “Alarm bell rings”",
      "D": "“Inactive”, [Press Button], “Active”, [Sensor Activated], “Alert Mode”, [Press Button], “Alert Mode”, [Timeout expired], “Alarm bell rings”"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: “Inactive”, [Press Button], “Active”, [Sensor Activated], “Alert Mode”, [Timeout expired], “Alarm bell rings”",
    "question_vi": "Hệ thống chống xâm nhập chạy bằng pin và được kích hoạt bằng cách nhấn nút duy nhất có sẵn. Để tắt hệ thống, người vận hành phải nhập mã PIN. Hệ thống sẽ ở chế độ cảnh báo trong khoảng thời gian chờ có thể định cấu hình và chuông báo động sẽ reo nếu hệ thống không bị tắt trước khi hết thời gian chờ. Sơ đồ chuyển trạng thái sau đây mô tả hành vi của hệ thống: Giả sử rằng mỗi trường hợp kiểm thử có dạng sau, trong đó các trạng thái được biểu thị trong dấu ngoặc kép và chuyển tiếp trong ngoặc vuông: “Trạng thái 1”, [Chuyển tiếp 1], “Trạng thái 2”, [Chuyển tiếp 2], …, “Trạng thái N-1”, [Chuyển tiếp N-1], “Trạng thái N”. Trường hợp thử nghiệm nào sau đây, ngoài tính hợp lệ, còn bao gồm tất cả các trạng thái với nỗ lực tối thiểu?",
    "options_vi": {
      "A": "“Không hoạt động”, [Nút nhấn], “Hoạt động”, [Đã kích hoạt cảm biến], “Chế độ cảnh báo”, [Hết thời gian chờ], “Chuông báo thức reo”",
      "B": "“Không hoạt động”, [Nhập mã PIN], “Hoạt động”, [Đã kích hoạt cảm biến], “Chế độ cảnh báo”, [Hết thời gian chờ], “Chuông báo thức reo”",
      "C": "“Không hoạt động”, [Nút nhấn], “Hoạt động”, [Nút nhấn], “Hoạt động”, [Đã kích hoạt cảm biến], “Chế độ cảnh báo”, [Hết thời gian chờ], “Chuông báo thức reo”",
      "D": "“Không hoạt động”, [Nút nhấn], “Hoạt động”, [Đã kích hoạt cảm biến], “Chế độ cảnh báo”, [Nút nhấn], “Chế độ cảnh báo”, [Hết thời gian chờ], “Chuông báo thức reo”"
    },
    "explanation_vi": "Giải pháp đúng là A: “Không hoạt động”, [Nhấn nút], “Hoạt động”, [Đã kích hoạt cảm biến], “Chế độ cảnh báo”, [Hết thời gian chờ], “Chuông báo thức reo”"
  },
  {
    "id": 85,
    "topic": "Exam A",
    "question": "Consider the following test-related items (1, 2, 3, 4) and four testing quadrants (Q1, Q2, Q3, Q4): 1. Security tests 2. Examples 3. Component integration tests 4. Exploratory tests Q1: technology facing, supporting the development team Q2: business facing, supporting the development team Q3: business facing, critique the product Q4: technology facing, critique the product How do the specified test-related items map onto the four testing quadrants?",
    "options": {
      "A": "1-Q3, 2-Q2, 3-Q1, 4-Q4",
      "B": "1-Q4, 2-Q2, 3-Q1, 4-Q3",
      "C": "1-Q1, 2-Q2, 3-Q3, 4-Q4",
      "D": "1-Q4, 2-Q1, 3-Q2, 4-Q3"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: 1-Q4, 2-Q2, 3-Q1, 4-Q3",
    "question_vi": "Hãy xem xét các mục liên quan đến kiểm thử sau (1, 2, 3, 4) và bốn góc phần tư kiểm thử (Q1, Q2, Q3, Q4): 1. Kiểm thử bảo mật 2. Ví dụ 3. Kiểm thử tích hợp thành phần 4. Kiểm thử thăm dò Q1: đối mặt với công nghệ, hỗ trợ nhóm phát triển Q2: đối mặt với doanh nghiệp, hỗ trợ nhóm phát triển Q3: đối mặt với doanh nghiệp, phê bình sản phẩm Q4: đối mặt với công nghệ, phê bình sản phẩm Làm thế nào để các mục liên quan đến kiểm thử được chỉ định ánh xạ vào bốn thử nghiệm góc phần tư?",
    "options_vi": {
      "A": "1-Q3, 2-Q2, 3-Q1, 4-Q4",
      "B": "1-Q4, 2-Q2, 3-Q1, 4-Q3",
      "C": "1-Q1, 2-Q2, 3-Q3, 4-Q4",
      "D": "1-Q4, 2-Q1, 3-Q2, 4-Q3"
    },
    "explanation_vi": "Câu trả lời đúng là B: 1-Q4, 2-Q2, 3-Q1, 4-Q3"
  },
  {
    "id": 86,
    "topic": "Exam A",
    "question": "You are a tester working on a critical project. Based on the risk analysis you need to decide on the order of test execution. Which of the following lists the correct sequence of test execution? Priority 1 is the highest and Priority 3 is the lowest priority.",
    "options": {
      "A": "D-С-В-A",
      "B": "C-B-A-D",
      "C": "D-A-B-C",
      "D": "D-B-A-C"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: D-B-A-C",
    "question_vi": "Bạn là người thử nghiệm đang làm việc trong một dự án quan trọng. Dựa trên phân tích rủi ro, bạn cần quyết định thứ tự thực hiện kiểm thử. Điều nào sau đây liệt kê trình tự thực hiện kiểm thử đúng? Ưu tiên 1 là cao nhất và Ưu tiên 3 là ưu tiên thấp nhất.",
    "options_vi": {
      "A": "D-С-В-A",
      "B": "C-B-A-D",
      "C": "D-A-B-C",
      "D": "D-B-A-C"
    },
    "explanation_vi": "Câu trả lời đúng là D: D-B-A-C"
  },
  {
    "id": 87,
    "topic": "Exam A",
    "question": "You are a test manager responsible for implementing risk-based testing in your organization which deals with software in the healthcare domain. You are writing a handbook of various product risk mitigation options. Which ONE of the following options correctly represent the correct mitigation options?",
    "options": {
      "A": "Choosing a tool for automated unit testing to reduce the risks",
      "B": "Using a third-party testing company to transfer the risk to that company",
      "C": "Selecting a tester with required knowledge related to compliance and standards",
      "D": "Increasing the number of testers to be able to take care of all the risks"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Selecting a tester with required knowledge related to compliance and standards",
    "question_vi": "Bạn là người quản lý kiểm tra chịu trách nhiệm triển khai kiểm tra dựa trên rủi ro trong tổ chức của bạn liên quan đến phần mềm trong lĩnh vực chăm sóc sức khỏe. Bạn đang viết một cuốn sổ tay về các lựa chọn giảm thiểu rủi ro sản phẩm khác nhau. MỘT trong các tùy chọn sau đây thể hiện chính xác các tùy chọn giảm thiểu chính xác?",
    "options_vi": {
      "A": "Chọn một công cụ để kiểm tra đơn vị tự động để giảm thiểu rủi ro",
      "B": "Sử dụng công ty kiểm tra bên thứ ba để chuyển rủi ro cho công ty đó",
      "C": "Lựa chọn người kiểm tra có kiến ​​thức cần thiết liên quan đến tuân thủ và tiêu chuẩn",
      "D": "Tăng số lượng người thử nghiệm để có thể giải quyết mọi rủi ro"
    },
    "explanation_vi": "Đáp án đúng là C: Lựa chọn người kiểm thử có kiến ​​thức cần thiết liên quan đến tuân thủ và tiêu chuẩn"
  },
  {
    "id": 88,
    "topic": "Exam A",
    "question": "Which of the following statements about impact of DevOps on testing is CORRECT?",
    "options": {
      "A": "DevOps helps shift focus of operations people to functional testing",
      "B": "DevOps helps shift focus of testing people to perform operations testing",
      "C": "DevOps helps eliminate manual testing by having focus on continuous automated testing",
      "D": "DevOps helps bring focus on testing of non-functional characteristics"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: DevOps helps bring focus on testing of non-functional characteristics",
    "question_vi": "Nhận định nào sau đây về tác động của DevOps đối với hoạt động thử nghiệm là ĐÚNG?",
    "options_vi": {
      "A": "DevOps giúp chuyển trọng tâm của người vận hành sang thử nghiệm chức năng",
      "B": "DevOps giúp chuyển trọng tâm của người kiểm thử sang thực hiện kiểm thử vận ​​hành",
      "C": "DevOps giúp loại bỏ thử nghiệm thủ công bằng cách tập trung vào thử nghiệm tự động liên tục",
      "D": "DevOps giúp tập trung vào việc thử nghiệm các đặc điểm phi chức năng"
    },
    "explanation_vi": "Đáp án đúng là D: DevOps giúp tập trung vào việc kiểm thử các đặc tính phi chức năng"
  },
  {
    "id": 89,
    "topic": "Exam A",
    "question": "Which sequence of state transitions is INCORRECT in accordance with the following description? To provide for disaster recovery a system (designated as A) has been provided with a backup system (designated as B). Only one of them can be active at a time. When A goes down, В becomes active. When A comes back up then В becomes inactive and A becomes active again. However, when A is down and В also goes down then a message is sent to the system administrator. After this once A comes back up, A becomes active or if В comes up then В becomes Active.",
    "options": {
      "A": "A is active and В is inactive A goes down. В becomes active then В goes down. A is made active",
      "B": "A comes up when В is active and A was down Now A becomes active and В becomes inactive",
      "C": "A is active and В is inactive then A goes down В becomes active",
      "D": "A and В are both down then A and В both come back up at the same time A should become the active system and В should be inactive"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: A and В are both down then A and В both come back up at the same time A should become the active system and В should be inactive",
    "question_vi": "Trình tự chuyển đổi trạng thái nào KHÔNG ĐÚNG theo mô tả sau đây? Để cung cấp khả năng khắc phục thảm họa, một hệ thống (ký hiệu là A) đã được cung cấp một hệ thống dự phòng (ký hiệu là B). Chỉ một trong số họ có thể hoạt động tại một thời điểm. Khi A ngừng hoạt động, В sẽ hoạt động. Khi A hoạt động trở lại thì B sẽ không hoạt động và A sẽ hoạt động trở lại. Tuy nhiên, khi A ngừng hoạt động và В cũng ngừng hoạt động thì một tin nhắn sẽ được gửi đến quản trị viên hệ thống. Sau đó, khi A hoạt động trở lại, A sẽ hoạt động hoặc nếu В xuất hiện thì В sẽ hoạt động.",
    "options_vi": {
      "A": "A đang hoạt động và В không hoạt động A giảm xuống. В trở nên hoạt động sau đó В đi xuống. A được kích hoạt",
      "B": "A xuất hiện khi В hoạt động và A không hoạt động Bây giờ A trở nên hoạt động và В trở nên không hoạt động",
      "C": "A đang hoạt động và В không hoạt động thì A chuyển xuống В trở nên hoạt động",
      "D": "A và В đều bị hỏng thì A và В đều hoạt động trở lại cùng lúc A sẽ trở thành hệ thống hoạt động và В sẽ không hoạt động"
    },
    "explanation_vi": "Giải pháp đúng là D: A và В đều ngừng hoạt động thì A và В đều hoạt động trở lại cùng lúc A sẽ trở thành hệ thống hoạt động và В sẽ không hoạt động"
  },
  {
    "id": 90,
    "topic": "Exam A",
    "question": "In a review which of the following is the responsibility of the manager?",
    "options": {
      "A": "Performing detailed review based on past experience",
      "B": "Organizing the logistics of the review meeting",
      "C": "Ensuring that sufficient time is available for review",
      "D": "Measuring the performance of each reviewer"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Ensuring that sufficient time is available for review",
    "question_vi": "Trong quá trình xem xét, trách nhiệm nào sau đây thuộc về người quản lý?",
    "options_vi": {
      "A": "Thực hiện đánh giá chi tiết dựa trên kinh nghiệm trong quá khứ",
      "B": "Tổ chức hậu cần cuộc họp tổng kết",
      "C": "Đảm bảo có đủ thời gian để xem xét",
      "D": "Đo lường hiệu suất của mỗi người đánh giá"
    },
    "explanation_vi": "Giải pháp đúng là C: Đảm bảo có đủ thời gian để xem xét"
  },
  {
    "id": 91,
    "topic": "Exam A",
    "question": "What does the \"absence-of-defects fallacy\" refer to in software development?",
    "options": {
      "A": "The idea that fixing defects is NOT important to meeting user needs",
      "B": "The need for constant system quality assurance and improvements.",
      "C": "A misconception that software verification is unnecessary",
      "D": "The belief that thoroughly testing all requirements guarantees system success"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: The belief that thoroughly testing all requirements guarantees system success",
    "question_vi": "\"Ngụy biện không có khuyết điểm\" đề cập đến điều gì trong quá trình phát triển phần mềm?",
    "options_vi": {
      "A": "Ý tưởng rằng việc sửa lỗi KHÔNG quan trọng để đáp ứng nhu cầu của người dùng",
      "B": "Sự cần thiết phải đảm bảo và cải tiến chất lượng hệ thống liên tục.",
      "C": "Một quan niệm sai lầm rằng việc xác minh phần mềm là không cần thiết",
      "D": "Niềm tin rằng việc kiểm tra kỹ lưỡng tất cả các yêu cầu đảm bảo sự thành công của hệ thống"
    },
    "explanation_vi": "Đáp án đúng là D: Niềm tin rằng việc kiểm tra kỹ lưỡng tất cả các yêu cầu sẽ đảm bảo sự thành công của hệ thống"
  },
  {
    "id": 92,
    "topic": "Exam A",
    "question": "Given some statements about independence of testing i. Independence is a replacement for familiarity with the code ii. Independence helps remove the biases produced because of own work iii. Similar kind of failures can be detected by anyone iv. Assumptions by different people are different revealing weaknesses Which of the following CORRECTLY represents the benefits?",
    "options": {
      "A": "ii and iv",
      "B": "iii and iv",
      "C": "i and iii",
      "D": "i and iv"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: ii and iv",
    "question_vi": "Đưa ra một số phát biểu về tính độc lập của việc kiểm tra i. Tính độc lập là sự thay thế cho việc làm quen với mật mã ii. Tính độc lập giúp loại bỏ những thành kiến ​​do chính công việc của mình tạo ra iii. Bất kỳ ai cũng có thể phát hiện ra những lỗi tương tự iv. Giả định của những người khác nhau là khác nhau bộc lộ điểm yếu Điều nào sau đây thể hiện ĐÚNG những lợi ích?",
    "options_vi": {
      "A": "ii và iv",
      "B": "iii và iv",
      "C": "tôi và iii",
      "D": "tôi và iv"
    },
    "explanation_vi": "Câu trả lời đúng là A: ii và iv"
  },
  {
    "id": 93,
    "topic": "Exam A",
    "question": "In branch testing, what is the significance of a conditional branch in a software program?",
    "options": {
      "A": "It signifies a comment or documentation within the code and it doesn’t indicate a defect",
      "B": "It marks a point where the program’s execution will terminate bringing the program to a halt",
      "C": "It indicates a decision point where the program can follow different paths based on specific conditions",
      "D": "It represents a programming error and therefore a conditional branch should be avoided"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: It indicates a decision point where the program can follow different paths based on specific conditions",
    "question_vi": "Trong thử nghiệm nhánh, tầm quan trọng của nhánh có điều kiện trong chương trình phần mềm là gì?",
    "options_vi": {
      "A": "Nó biểu thị một nhận xét hoặc tài liệu trong mã và nó không biểu thị lỗi",
      "B": "Nó đánh dấu thời điểm việc thực thi chương trình sẽ chấm dứt khiến chương trình bị dừng lại",
      "C": "Nó chỉ ra điểm quyết định trong đó chương trình có thể đi theo các đường dẫn khác nhau dựa trên các điều kiện cụ thể",
      "D": "Nó đại diện cho một lỗi lập trình và do đó nên tránh một nhánh có điều kiện"
    },
    "explanation_vi": "Đáp án đúng là C: Nó biểu thị điểm quyết định mà chương trình có thể đi theo các đường dẫn khác nhau dựa trên các điều kiện cụ thể"
  },
  {
    "id": 94,
    "topic": "Exam A",
    "question": "For a given set of test-cases, which of the following is a benefit of running these tests with a test automation tool?",
    "options": {
      "A": "Test coverage is increased",
      "B": "The time spent on repetitive tasks is reduced",
      "C": "The number of found bugs is reduced",
      "D": "The total cost of the test project always decreases"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: The time spent on repetitive tasks is reduced",
    "question_vi": "Đối với một tập hợp các trường hợp thử nghiệm nhất định, lợi ích nào sau đây là lợi ích của việc chạy các thử nghiệm này bằng công cụ tự động hóa thử nghiệm?",
    "options_vi": {
      "A": "Phạm vi kiểm tra được tăng lên",
      "B": "Giảm thời gian dành cho các công việc lặp đi lặp lại",
      "C": "Số lượng lỗi được tìm thấy giảm",
      "D": "Tổng chi phí của dự án thử nghiệm luôn giảm"
    },
    "explanation_vi": "Đáp án đúng là B: Thời gian dành cho những công việc lặp đi lặp lại giảm đi"
  },
  {
    "id": 95,
    "topic": "Exam A",
    "question": "Which of the following statements is CORRECT about the value added by a tester to release planning?",
    "options": {
      "A": "The tester writes acceptance criteria",
      "B": "The tester assesses the testability of the user stories",
      "C": "The tester breaks down user stories into smaller testing tasks",
      "D": "The tester estimates the testing effort for individual iterations"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: The tester assesses the testability of the user stories",
    "question_vi": "Câu nào sau đây ĐÚNG về giá trị gia tăng của người thử nghiệm khi lập kế hoạch phát hành?",
    "options_vi": {
      "A": "Người kiểm tra viết tiêu chí chấp nhận",
      "B": "Người thử nghiệm đánh giá khả năng thử nghiệm của các câu chuyện của người dùng",
      "C": "Người thử nghiệm chia các câu chuyện của người dùng thành các nhiệm vụ thử nghiệm nhỏ hơn",
      "D": "Người thử nghiệm ước tính nỗ lực thử nghiệm cho các lần lặp riêng lẻ"
    },
    "explanation_vi": "Đáp án đúng là B: Người kiểm thử đánh giá khả năng kiểm thử của user story"
  },
  {
    "id": 96,
    "topic": "Exam A",
    "question": "Which of the following statements correctly describe the business facing quadrant that supports the team?",
    "options": {
      "A": "It is the quadrant that component testing.",
      "B": "It is the quadrant that Non-functional testing such as performance and the tests are created on the basis of user scenarios",
      "C": "It is the quadrant that deals with tests created on the basis of user stories",
      "D": "Exploratory tests are generally used for this quadrant"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: It is the quadrant that deals with tests created on the basis of user stories",
    "question_vi": "Câu nào sau đây mô tả chính xác góc phần tư mà doanh nghiệp phải đối mặt hỗ trợ nhóm?",
    "options_vi": {
      "A": "Đó là góc phần tư mà thành phần kiểm tra.",
      "B": "Đây là góc phần tư mà các thử nghiệm Phi chức năng như hiệu suất và các thử nghiệm được tạo trên cơ sở các kịch bản của người dùng",
      "C": "Đây là góc phần tư xử lý các thử nghiệm được tạo trên cơ sở các câu chuyện của người dùng",
      "D": "Các thử nghiệm thăm dò thường được sử dụng cho góc phần tư này"
    },
    "explanation_vi": "Đáp án đúng là C: Đây là góc phần tư xử lý các bài kiểm tra được tạo dựa trên câu chuyện của người dùng"
  },
  {
    "id": 97,
    "topic": "Exam A",
    "question": "Which ONE of the following is a characteristic of exploratory testing?",
    "options": {
      "A": "Testing without defined time-boxes",
      "B": "Usually conducted when there is sufficient time for testing",
      "C": "Test cases are written once the specifications become available",
      "D": "Effectiveness depends on the individual testers’ skills"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Effectiveness depends on the individual testers’ skills",
    "question_vi": "Điều nào sau đây là đặc điểm của thử nghiệm thăm dò?",
    "options_vi": {
      "A": "Kiểm thử không có khung thời gian xác định",
      "B": "Thường được tiến hành khi có đủ thời gian để thử nghiệm",
      "C": "Các trường hợp thử nghiệm được viết khi các thông số kỹ thuật có sẵn",
      "D": "Hiệu quả phụ thuộc vào kỹ năng của từng người thử nghiệm"
    },
    "explanation_vi": "Đáp án đúng là D: Hiệu quả phụ thuộc vào kỹ năng của từng người thử nghiệm"
  },
  {
    "id": 98,
    "topic": "Exam A",
    "question": "Pariksha labs is a mature software testing company. They are TMMi level 5 certified. Their testing processes are well defined. Which ONE of the following statements is likely to be CORRECT about them?",
    "options": {
      "A": "They try to perform 100% automation for every project because automation is a must for efficiency",
      "B": "Same set of testing processes are used by them without needing any tweaks because that is the hallmark of a mature testing company",
      "C": "The company uses same test strategy for all the projects doing minor changes based on test manager responsible for the project because their test strategy template is very mature and do not need to change",
      "D": "The question about the test design techniques to be used is determined based on various factors such as the domain and expectations of the stakeholders"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: The question about the test design techniques to be used is determined based on various factors such as the domain and expectations of the stakeholders",
    "question_vi": "Phòng thí nghiệm Pariksha là một công ty kiểm thử phần mềm trưởng thành. Họ được chứng nhận TMMi cấp 5. Quy trình thử nghiệm của họ được xác định rõ ràng. MỘT trong những câu sau đây có khả năng ĐÚNG về chúng?",
    "options_vi": {
      "A": "Họ cố gắng thực hiện tự động hóa 100% cho mọi dự án vì tự động hóa là điều bắt buộc để mang lại hiệu quả",
      "B": "Họ sử dụng cùng một bộ quy trình thử nghiệm mà không cần bất kỳ chỉnh sửa nào vì đó là đặc điểm nổi bật của một công ty thử nghiệm trưởng thành",
      "C": "Công ty sử dụng cùng một chiến lược thử nghiệm cho tất cả các dự án thực hiện những thay đổi nhỏ dựa trên người quản lý thử nghiệm chịu trách nhiệm về dự án vì mẫu chiến lược thử nghiệm của họ đã rất hoàn thiện và không cần thay đổi",
      "D": "Câu hỏi về các kỹ thuật thiết kế thử nghiệm sẽ được sử dụng được xác định dựa trên nhiều yếu tố khác nhau như phạm vi và mong đợi của các bên liên quan."
    },
    "explanation_vi": "Đáp án đúng là D: Câu hỏi về kỹ thuật thiết kế bài kiểm tra sẽ sử dụng được xác định dựa trên nhiều yếu tố khác nhau như phạm vi và kỳ vọng của các bên liên quan"
  },
  {
    "id": 99,
    "topic": "Exam A",
    "question": "You are working on creating test cases for a user story. As a customer, I want to be able to book an ISTQB exam for a particular date, so that I can find choose my time slot and pay the correct amount, including discounts, if any. The acceptance criteria for this: 1. The dates shown should be from the current date to 2 years in future. 2. Initially there should be 10 timeslots available for each day, 1 hour each starting at 8 AM GMT. 3. Maximum 5 persons should be able to select a time slot after which that time slot should become unavailable. 4. First timeslot should have a 10% discount. Which of the following is the BEST example of a test case for this user story?",
    "options": {
      "A": "Logon to the site and book an exam for the 8 AM (GMT) timeslot. Expected result: You should get 10% discounted price. Change the time to any other timeslot. Expected result: Discount should be removed.",
      "B": "Logon to the site. Book an exam for the current date. Expected result: timeslots should be shown. Change the time to any other date prior to the selected date. Expected result: New slot should become visible.",
      "C": "Logon to the site. Book 5 exams for the current date. Expected result: Exams should be booked. Book 6th timeslot for the same date. Expected result: The exam should be booked but no discount should be given.",
      "D": "Logon to the site. Expected result: Default 8 AM (GMT) timeslot should be selected. Change the time to any other timeslot Expected result. New slot should be booked."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Logon to the site and book an exam for the 8 AM (GMT) timeslot. Expected result: You should get 10% discounted price. Change the time to any other timeslot. Expected result: Discount should be removed.",
    "question_vi": "Bạn đang tạo các trường hợp thử nghiệm cho một câu chuyện của người dùng. Với tư cách là một khách hàng, tôi muốn có thể đăng ký bài kiểm tra ISTQB vào một ngày cụ thể để tôi có thể chọn khung thời gian của mình và thanh toán số tiền chính xác, bao gồm cả khoản giảm giá, nếu có. Tiêu chí chấp nhận cho việc này: 1. Ngày hiển thị phải từ ngày hiện tại đến 2 năm sau. 2. Ban đầu, mỗi ngày sẽ có 10 khung giờ, mỗi khung giờ 1 giờ, bắt đầu lúc 8 giờ sáng GMT. 3. Tối đa 5 người có thể chọn một khoảng thời gian sau đó khoảng thời gian đó sẽ không còn khả dụng. 4. Khoảng thời gian đầu tiên sẽ được giảm giá 10%. Điều nào sau đây là ví dụ TỐT NHẤT về trường hợp thử nghiệm cho câu chuyện của người dùng này?",
    "options_vi": {
      "A": "Đăng nhập vào trang web và đăng ký bài kiểm tra vào khung giờ 8 giờ sáng (GMT). Kết quả mong đợi: Bạn sẽ được giảm giá 10%. Thay đổi thời gian sang bất kỳ khung thời gian nào khác. Kết quả mong đợi: Giảm giá nên được loại bỏ.",
      "B": "Đăng nhập vào trang web. Đặt một bài kiểm tra cho ngày hiện tại. Kết quả mong đợi: các khe thời gian sẽ được hiển thị. Thay đổi thời gian sang bất kỳ ngày nào khác trước ngày đã chọn. Kết quả mong đợi: Khe mới sẽ hiển thị.",
      "C": "Đăng nhập vào trang web. Đặt 5 bài kiểm tra cho ngày hiện tại. Kết quả mong đợi: Nên đăng ký thi. Đặt vé lần thứ 6 trong cùng ngày. Kết quả mong đợi: Nên đặt lịch thi nhưng không được giảm giá.",
      "D": "Đăng nhập vào trang web. Kết quả mong đợi: Phải chọn khung thời gian mặc định là 8 giờ sáng (GMT). Thay đổi thời gian sang bất kỳ khung thời gian nào khác Nên đặt chỗ mới."
    },
    "explanation_vi": "Đáp án đúng là A: Đăng nhập vào trang web và đăng ký thi vào khung giờ 8 giờ sáng (GMT). Kết quả mong đợi: Bạn sẽ được giảm giá 10%. Thay đổi thời gian sang bất kỳ khung thời gian nào khác. Kết quả mong đợi: Giảm giá nên được loại bỏ."
  },
  {
    "id": 100,
    "topic": "Exam A",
    "question": "A number of characteristics are given for impact of SDLC on the testing effort. i. Finishing of requirements review leading to test analysts ii. Both - static and dynamic testing performed at unit testing level iii. Frequent regression testing may need to be performed iv. Extensive product documentation v. More use of exploratory testing Which of the following statements is MOST correct?",
    "options": {
      "A": "i, ii and iii are characteristics of sequential models; iv and v are characteristics of iterative and incremental models",
      "B": "iii and iv are characteristics of sequential models; and i, ii and v are characteristics of iterative and incremental models",
      "C": "i and iv are characteristics of sequential models; ii, iii and v are characteristics of iterative and incremental models",
      "D": "ii and iv are characteristics of sequential models; i in and v are characteristics of iterative and incremental models"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: i and iv are characteristics of sequential models; ii, iii and v are characteristics of iterative and incremental models",
    "question_vi": "Một số đặc điểm được đưa ra về tác động của SDLC đối với nỗ lực thử nghiệm. Tôi. Hoàn tất việc xem xét yêu cầu để tiến hành phân tích kiểm thử ii. Cả hai - thử nghiệm tĩnh và động được thực hiện ở cấp độ thử nghiệm đơn vị iii. Kiểm tra hồi quy thường xuyên có thể cần phải được thực hiện iv. Tài liệu sản phẩm mở rộng v. Sử dụng nhiều hơn thử nghiệm thăm dò Câu nào sau đây đúng NHẤT?",
    "options_vi": {
      "A": "i, ii và iii là đặc điểm của mô hình tuần tự; iv và v là đặc điểm của mô hình lặp và tăng dần",
      "B": "iii và iv là đặc điểm của mô hình tuần tự; và i, ii và v là đặc điểm của mô hình lặp và tăng dần",
      "C": "i và iv là đặc điểm của mô hình tuần tự; ii, iii và v là đặc điểm của mô hình lặp và tăng dần",
      "D": "ii và iv là đặc điểm của mô hình tuần tự; i in và v là đặc điểm của mô hình lặp và tăng dần"
    },
    "explanation_vi": "Đáp án đúng là C: i và iv là đặc điểm của mô hình tuần tự; ii, iii và v là đặc điểm của mô hình lặp và tăng dần"
  },
  {
    "id": 101,
    "topic": "Exam A",
    "question": "Which of the following is an example of scenario-oriented acceptance criteria?",
    "options": {
      "A": "The user should be able to provide three inputs to test the product - the AI model to be tested, the data used and an optional text file",
      "B": "An unregistered user shouldn't be shown any report",
      "C": "Verify that a registered user can create add a new project with name having more than 100 characters",
      "D": "A user is already logged in then on navigating to the AI model testing page the user should be directly shown the report of last test run"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: A user is already logged in then on navigating to the AI model testing page the user should be directly shown the report of last test run",
    "question_vi": "Điều nào sau đây là ví dụ về tiêu chí chấp nhận theo định hướng kịch bản?",
    "options_vi": {
      "A": "Người dùng có thể cung cấp ba đầu vào để kiểm tra sản phẩm - mô hình AI cần kiểm tra, dữ liệu được sử dụng và tệp văn bản tùy chọn",
      "B": "Người dùng chưa đăng ký sẽ không được hiển thị bất kỳ báo cáo nào",
      "C": "Xác minh rằng người dùng đã đăng ký có thể tạo thêm dự án mới với tên có hơn 100 ký tự",
      "D": "Người dùng đã đăng nhập, sau đó khi điều hướng đến trang thử nghiệm mô hình AI, người dùng sẽ được hiển thị trực tiếp báo cáo về lần chạy thử nghiệm cuối cùng"
    },
    "explanation_vi": "Giải pháp đúng là D: Một người dùng đã đăng nhập thì khi điều hướng đến trang thử nghiệm mô hình AI, người dùng sẽ được hiển thị trực tiếp báo cáo về lần chạy thử nghiệm cuối cùng"
  },
  {
    "id": 102,
    "topic": "Exam A",
    "question": "Consider a program that computes the factorial of a number (n). From the specifications you know that: • If n < 0, a message \"Value out of range\" must be issued • If 0 ≤ n ≤ 100, the program calculates the factorial and returns the number • If 100 ≤ n ≤ 200 message \"Value out of range\" must be issued Which of the following statements about the equivalence partitions is CORRECT?",
    "options": {
      "A": "There are 3 partitions - one for negative numbers, one for numbers up to 100 and the last one for numbers up to 200",
      "B": "The requirements are not correct because the partitions are overlapping",
      "C": "The equivalence partitions cannot be determined for this question because the error message for two partitions is exactly same",
      "D": "The equivalence partitions cannot be determined for this question because factorial of numbers close to 200 will be very large"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: The requirements are not correct because the partitions are overlapping",
    "question_vi": "Hãy xem xét một chương trình tính giai thừa của một số (n). Từ các thông số kỹ thuật, bạn biết rằng: • Nếu n < 0 thì phải đưa ra thông báo \"Giá trị ngoài phạm vi\" • Nếu 0 ≤ n ≤ 100, chương trình sẽ tính giai thừa và trả về số • Nếu 100 ≤ n ≤ 200 thì phải đưa ra thông báo \"Giá trị ngoài phạm vi\" Câu phát biểu nào sau đây về phân vùng tương đương là ĐÚNG?",
    "options_vi": {
      "A": "Có 3 phân vùng - một phân vùng cho số âm, một phân vùng cho các số lên tới 100 và phân vùng cuối cùng cho các số lên tới 200",
      "B": "Yêu cầu không đúng do các phân vùng bị chồng chéo",
      "C": "Không thể xác định các phân vùng tương đương cho câu hỏi này vì thông báo lỗi cho hai phân vùng hoàn toàn giống nhau",
      "D": "Không thể xác định được phân vùng tương đương cho câu hỏi này vì giai thừa của các số gần 200 sẽ rất lớn"
    },
    "explanation_vi": "Đáp án đúng là B: Yêu cầu không đúng do các phân vùng chồng lên nhau"
  },
  {
    "id": 103,
    "topic": "Exam A",
    "question": "Which of the following is a good testing practice which is applicable INDEPENDENT of the software development lifecycle followed?",
    "options": {
      "A": "Not all development activities should have corresponding test activities",
      "B": "Large amount of redundancy between test levels is good because it prevents bug leakage",
      "C": "Reviews should be done after the work products have been finalized",
      "D": "Each test level should have an appropriate test objective"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Each test level should have an appropriate test objective",
    "question_vi": "Điều nào sau đây là phương pháp kiểm thử tốt có thể áp dụng ĐỘC LẬP với vòng đời phát triển phần mềm?",
    "options_vi": {
      "A": "Không phải tất cả các hoạt động phát triển đều phải có hoạt động kiểm tra tương ứng",
      "B": "Lượng dự phòng lớn giữa các cấp độ kiểm tra là tốt vì nó ngăn ngừa rò rỉ lỗi",
      "C": "Việc đánh giá nên được thực hiện sau khi sản phẩm công việc đã được hoàn thiện",
      "D": "Mỗi cấp độ kiểm tra cần có mục tiêu kiểm tra phù hợp"
    },
    "explanation_vi": "Đáp án đúng là D: Mỗi cấp độ thi cần có mục tiêu kiểm tra phù hợp"
  },
  {
    "id": 104,
    "topic": "Exam A",
    "question": "Which ONE of the following is a CORRECT example of the purpose of a test plan?",
    "options": {
      "A": "A test manager decides to create a one-page test plan for an agile project for communicating the broad activities and explaining why detailed test cases will not be written as mandated by the test policy.",
      "B": "A test plan is a good document to have for the agile projects because it helps the test manager assign tasks to different people.",
      "C": "A test lead decides to write a detailed test plan so that in future, in case of project failure responsibilities could be assigned to the right person.",
      "D": "A test manager should always create a very simple test plan because the purpose of test plan is to ensure that there is documentation for the purpose of audits."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: A test manager decides to create a one-page test plan for an agile project for communicating the broad activities and explaining why detailed test cases will not be written as mandated by the test policy.",
    "question_vi": "MỘT trong những điều sau đây là ví dụ ĐÚNG về mục đích của kế hoạch kiểm thử?",
    "options_vi": {
      "A": "Người quản lý kiểm thử quyết định tạo một kế hoạch kiểm thử một trang cho một dự án linh hoạt để truyền đạt các hoạt động rộng rãi và giải thích lý do tại sao các trường hợp kiểm thử chi tiết sẽ không được viết theo yêu cầu của chính sách kiểm thử.",
      "B": "Kế hoạch kiểm thử là một tài liệu tốt cần có cho các dự án linh hoạt vì nó giúp người quản lý kiểm thử phân công nhiệm vụ cho những người khác nhau.",
      "C": "Trưởng nhóm kiểm thử quyết định viết một kế hoạch kiểm tra chi tiết để trong tương lai, trong trường hợp dự án thất bại, trách nhiệm có thể được giao cho đúng người.",
      "D": "Người quản lý kiểm thử phải luôn tạo một kế hoạch kiểm tra thật đơn giản vì mục đích của kế hoạch kiểm tra là đảm bảo rằng có tài liệu phục vụ cho mục đích kiểm tra."
    },
    "explanation_vi": "Đáp án đúng là A: Người quản lý kiểm thử quyết định tạo một kế hoạch kiểm thử một trang cho một dự án linh hoạt để truyền đạt các hoạt động rộng rãi và giải thích lý do tại sao các trường hợp kiểm thử chi tiết sẽ không được viết theo quy định của chính sách kiểm thử."
  },
  {
    "id": 105,
    "topic": "Exam A",
    "question": "A software development company invests heavily in tools to support the entire software development lifecycle, including testing. They have a tool that allows automated creation and installation of builds and subsequent execution of various types of automated tests. Which ONE of the following is a CORRECT statement about this type of test tool?",
    "options": {
      "A": "It is an example of DevOps related tools",
      "B": "It is an example of collaboration tool",
      "C": "It is an example of test implementation tool",
      "D": "It is an example of automated unit testing tool"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: It is an example of DevOps related tools",
    "question_vi": "Một công ty phát triển phần mềm đầu tư rất nhiều vào các công cụ hỗ trợ toàn bộ vòng đời phát triển phần mềm, bao gồm cả thử nghiệm. Họ có một công cụ cho phép tự động tạo và cài đặt các bản dựng cũng như thực hiện các loại thử nghiệm tự động khác nhau sau đó. MỘT trong những câu sau đây là ĐÚNG về loại công cụ kiểm tra này?",
    "options_vi": {
      "A": "Đây là một ví dụ về các công cụ liên quan đến DevOps",
      "B": "Đây là một ví dụ về công cụ cộng tác",
      "C": "Đây là một ví dụ về công cụ triển khai thử nghiệm",
      "D": "Đây là một ví dụ về công cụ kiểm tra đơn vị tự động"
    },
    "explanation_vi": "Đáp án đúng là A: Đây là một ví dụ về các công cụ liên quan đến DevOps"
  },
  {
    "id": 106,
    "topic": "Exam A",
    "question": "An e-commerce site accepts credit cards for processing the payment. The payment processing form has a field for the amount of money to be deducted. The minimum amount of money that can be processed is $10. The credit cards have a limit of $5,000 (Five Thousand). Assume that only integers can be accepted as inputs. Which of the following set of boundary values you will choose for EFFICIENT testing for the amount of money that can be spent?",
    "options": {
      "A": "9,52001",
      "B": "9, 10, 5000, 5001",
      "C": "10, 5000",
      "D": "9, 10, 11, 4999, 5000, 5001"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: 9, 10, 5000, 5001",
    "question_vi": "Trang web thương mại điện tử chấp nhận thẻ tín dụng để xử lý thanh toán. Biểu mẫu xử lý thanh toán có một trường dành cho số tiền được khấu trừ. Số tiền tối thiểu có thể được xử lý là 10 USD. Thẻ tín dụng có giới hạn là 5.000 USD (Năm nghìn). Giả sử rằng chỉ có số nguyên mới có thể được chấp nhận làm đầu vào. Bạn sẽ chọn tập hợp giá trị biên nào sau đây để kiểm tra HIỆU QUẢ về số tiền có thể chi tiêu?",
    "options_vi": {
      "A": "9,52001",
      "B": "9, 10, 5000, 5001",
      "C": "10, 5000",
      "D": "9, 10, 11, 4999, 5000, 5001"
    },
    "explanation_vi": "Đáp án đúng là B: 9, 10, 5000, 5001"
  },
  {
    "id": 107,
    "topic": "Exam A",
    "question": "Which of the following is the BEST example of whole team approach?",
    "options": {
      "A": "Anyone can perform a task they are capable of",
      "B": "Sharing same physical workspace is a must",
      "C": "Testing is the responsibility of the entire team",
      "D": "Developers should depend on the business analysts as there is no distinction between testers and developers"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Testing is the responsibility of the entire team",
    "question_vi": "Điều nào sau đây là ví dụ TỐT NHẤT về cách tiếp cận toàn nhóm?",
    "options_vi": {
      "A": "Bất cứ ai cũng có thể thực hiện một nhiệm vụ mà họ có khả năng",
      "B": "Chia sẻ cùng một không gian làm việc vật lý là điều bắt buộc",
      "C": "Kiểm thử là trách nhiệm của toàn đội",
      "D": "Các nhà phát triển nên phụ thuộc vào các nhà phân tích kinh doanh vì không có sự phân biệt giữa người thử nghiệm và nhà phát triển"
    },
    "explanation_vi": "Đáp án đúng là C: Kiểm thử là trách nhiệm của cả nhóm"
  },
  {
    "id": 108,
    "topic": "Exam A",
    "question": "Which of the following statements is CORRECT?",
    "options": {
      "A": "Testing based on the structure of the software under test (SUT) is white-box testing whereas testing the input-output behaviour without pre-written test cases is experience based testing.",
      "B": "Testing the software under test (SUT) based on the design is black-box testing whereas testing the input-output behaviour is experience based testing.",
      "C": "Testing the software under test (SUT) is possible only after implementation in white-box testing whereas testing the software even before implementation is possible in exploratory testing.",
      "D": "Testing the software under test (SUT) using knowledge of the tester is experience based testing whereas testing the specification based behaviour without pre-written test cases is using black-box testing techniques."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Testing based on the structure of the software under test (SUT) is white-box testing whereas testing the input-output behaviour without pre-written test cases is experience based testing.",
    "question_vi": "Phát biểu nào sau đây là ĐÚNG?",
    "options_vi": {
      "A": "Kiểm thử dựa trên cấu trúc của phần mềm đang được kiểm thử (SUT) là kiểm thử hộp trắng trong khi kiểm thử hành vi đầu vào-đầu ra mà không có trường hợp kiểm thử được viết sẵn là kiểm thử dựa trên kinh nghiệm.",
      "B": "Kiểm thử phần mềm đang được kiểm thử (SUT) dựa trên thiết kế là kiểm thử hộp đen trong khi kiểm thử hành vi đầu vào-đầu ra là kiểm thử dựa trên kinh nghiệm.",
      "C": "Việc kiểm thử phần mềm đang được kiểm thử (SUT) chỉ có thể thực hiện được sau khi triển khai trong kiểm thử hộp trắng trong khi việc kiểm thử phần mềm ngay cả trước khi triển khai là có thể trong kiểm thử thăm dò.",
      "D": "Kiểm thử phần mềm đang được kiểm thử (SUT) sử dụng kiến ​​thức của người kiểm thử là kiểm thử dựa trên kinh nghiệm trong khi kiểm thử hành vi dựa trên đặc tả mà không có trường hợp kiểm thử được viết sẵn là sử dụng các kỹ thuật kiểm thử hộp đen."
    },
    "explanation_vi": "Đáp án đúng là A: Kiểm thử dựa trên cấu trúc của phần mềm đang được kiểm thử (SUT) là kiểm thử hộp trắng trong khi kiểm thử hành vi đầu vào-đầu ra mà không có trường hợp kiểm thử nào được viết sẵn là kiểm thử dựa trên kinh nghiệm."
  },
  {
    "id": 109,
    "topic": "Exam A",
    "question": "Match the Work Product with the category it belongs to: Work Product: 1. Risk register 2. Risk information 3. Test cases 4. Test conditions. Category of work products: A) Test planning work products В) Test analysis work products  С) Test design work products   D) Test monitoring and control work products",
    "options": {
      "A": "1-А, 2-С, 3-В, 4-D",
      "B": "1-С, 2-А, 3-D, 4-В",
      "C": "1-В, 2-D, 3-А, 4-С",
      "D": "1-А, 2-D, 3-С, 4-В"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: 1-А, 2-D, 3-С, 4-В",
    "question_vi": "Ghép Sản phẩm Công việc với danh mục mà nó thuộc về: Sản phẩm Công việc: 1. Đăng ký rủi ro 2. Thông tin rủi ro 3. Trường hợp kiểm thử 4. Điều kiện kiểm thử Danh mục sản phẩm công việc:",
    "options_vi": {
      "A": "1-А, 2-С, 3-В, 4-D",
      "B": "1-С, 2-А, 3-D, 4-В",
      "C": "1-В, 2-D, 3-А, 4-С",
      "D": "1-А, 2-D, 3-С, 4-В"
    },
    "explanation_vi": "Câu trả lời đúng là D: 1-А, 2-D, 3-С, 4-В"
  },
  {
    "id": 110,
    "topic": "Exam A",
    "question": "Which of the following is the main difference between quality assurance (QA) and quality control (QC)?",
    "options": {
      "A": "QA is the responsibility of everyone on a project while QC is the responsibility of a dedicated team",
      "B": "QA is a process-oriented approach, while QC is a product-oriented approach.",
      "C": "QA is preventive while QC is corrective",
      "D": "QA is focused on implementation, while QC is focused on improvement"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: QA is a process-oriented approach, while QC is a product-oriented approach.",
    "question_vi": "Điều nào sau đây là sự khác biệt chính giữa đảm bảo chất lượng (QA) và kiểm soát chất lượng (QC)?",
    "options_vi": {
      "A": "QA là trách nhiệm của mọi người trong dự án trong khi QC là trách nhiệm của một nhóm tận tâm",
      "B": "QA là cách tiếp cận theo định hướng quy trình, trong khi QC là cách tiếp cận theo định hướng sản phẩm.",
      "C": "QA mang tính phòng ngừa trong khi QC mang tính khắc phục",
      "D": "QA tập trung vào việc triển khai, trong khi QC tập trung vào cải tiến"
    },
    "explanation_vi": "Đáp án đúng là B: QA là cách tiếp cận theo định hướng quy trình, trong khi QC là cách tiếp cận theo định hướng sản phẩm."
  },
  {
    "id": 111,
    "topic": "Exam A",
    "question": "Shripriya is defining the guidelines for the review process implementation in her company. Which of the following statements is LEAST likely to have been recommended by her?",
    "options": {
      "A": "Review initiation is the stage when the review team starts the discussion on the review comments",
      "B": "Independent of the size of the work products, planning for the review should be performed",
      "C": "Large sized work products should be reviewed in one go because you will have to spend too much time if you split it into multiple reviews",
      "D": "Defect reports should be created for every review found"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Large sized work products should be reviewed in one go because you will have to spend too much time if you split it into multiple reviews",
    "question_vi": "Shripriya đang xác định các hướng dẫn thực hiện quy trình đánh giá trong công ty của mình. Câu nào sau đây ÍT có khả năng được cô ấy đề xuất nhất?",
    "options_vi": {
      "A": "Bắt đầu đánh giá là giai đoạn nhóm đánh giá bắt đầu thảo luận về các nhận xét đánh giá",
      "B": "Không phụ thuộc vào quy mô của sản phẩm công việc, việc lập kế hoạch đánh giá cần được thực hiện",
      "C": "Các sản phẩm công việc có quy mô lớn nên được xem xét một lần vì bạn sẽ phải tốn quá nhiều thời gian nếu chia thành nhiều đánh giá",
      "D": "Báo cáo lỗi phải được tạo cho mỗi đánh giá được tìm thấy"
    },
    "explanation_vi": "Câu trả lời đúng là C: Những sản phẩm có kích thước lớn nên được xem xét một lần vì bạn sẽ phải mất quá nhiều thời gian nếu chia thành nhiều bài đánh giá"
  },
  {
    "id": 112,
    "topic": "Exam A",
    "question": "Which of the following examples represents System Integration testing?",
    "options": {
      "A": "Testing the system based on specifications using simulator for a sub-system",
      "B": "Testing an application in development environment which is similar to the production environment",
      "C": "Testing an application's behaviour to check if it fulfils business needs",
      "D": "Testing if e-commerce website works correctly with a third-party payment gateway"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Testing if e-commerce website works correctly with a third-party payment gateway",
    "question_vi": "Ví dụ nào sau đây đại diện cho thử nghiệm Tích hợp Hệ thống?",
    "options_vi": {
      "A": "Kiểm tra hệ thống dựa trên thông số kỹ thuật bằng cách sử dụng trình mô phỏng cho hệ thống con",
      "B": "Kiểm thử một ứng dụng trong môi trường phát triển tương tự như môi trường sản xuất",
      "C": "Kiểm tra hành vi của ứng dụng để kiểm tra xem nó có đáp ứng nhu cầu kinh doanh hay không",
      "D": "Kiểm tra xem trang web thương mại điện tử có hoạt động chính xác với cổng thanh toán của bên thứ ba không"
    },
    "explanation_vi": "Đáp án đúng là D: Kiểm tra xem trang web thương mại điện tử có hoạt động chính xác với cổng thanh toán của bên thứ ba không"
  },
  {
    "id": 113,
    "topic": "Exam A",
    "question": "Which of the following statements is CORRECT about error guessing?",
    "options": {
      "A": "Error guessing depends on the developers guessing what mistakes testers might make and miss the possible defects",
      "B": "While reviewing the test cases, testers have to make guess about the kind of mistakes test cases might contain",
      "C": "Error guessing doesn't make use of past failures as past failures are not indicators of correct defects",
      "D": "Fault attacks are an example of a technique for implementing error guessing"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Fault attacks are an example of a technique for implementing error guessing",
    "question_vi": "Câu nào sau đây ĐÚNG về việc đoán lỗi?",
    "options_vi": {
      "A": "Việc đoán lỗi phụ thuộc vào việc nhà phát triển đoán xem người kiểm tra có thể mắc lỗi gì và bỏ sót các lỗi có thể xảy ra",
      "B": "Trong khi xem xét các trường hợp kiểm thử, người kiểm thử phải đoán về loại lỗi mà các trường hợp kiểm thử có thể mắc phải.",
      "C": "Việc đoán lỗi không sử dụng các lỗi trong quá khứ vì các lỗi trong quá khứ không phải là dấu hiệu của lỗi chính xác",
      "D": "Tấn công lỗi là một ví dụ về kỹ thuật thực hiện đoán lỗi"
    },
    "explanation_vi": "Đáp án đúng là D: Tấn công lỗi là một ví dụ về kỹ thuật thực hiện đoán lỗi"
  },
  {
    "id": 114,
    "topic": "Exam A",
    "question": "Which of the following is LEAST likely to describe a task performed by someone in a testing role?",
    "options": {
      "A": "Evaluate test basis and test object",
      "B": "Create test completion report",
      "C": "Define test environment requirements",
      "D": "Assess testability of test object"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Define test environment requirements",
    "question_vi": "Điều nào sau đây ÍT NHẤT có thể mô tả một nhiệm vụ được thực hiện bởi một người nào đó trong vai trò kiểm thử?",
    "options_vi": {
      "A": "Đánh giá cơ sở kiểm thử và đối tượng kiểm thử",
      "B": "Tạo báo cáo hoàn thành thử nghiệm",
      "C": "Xác định các yêu cầu về môi trường thử nghiệm",
      "D": "Đánh giá khả năng kiểm thử của đối tượng kiểm thử"
    },
    "explanation_vi": "Đáp án đúng là C: Xác định yêu cầu về môi trường test"
  },
  {
    "id": 115,
    "topic": "Exam A",
    "question": "Which of the following correctly represents a test first approach?",
    "options": {
      "A": "Tests are derived from acceptance criteria and run to check that the code passes these tests",
      "B": "Application behaviour is written in Given/When/Then format and tests are then written and run",
      "C": "First the tests fail then the code is written to pass the tests and this is iterated",
      "D": "Code is refactored first then tests are written and run"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: First the tests fail then the code is written to pass the tests and this is iterated",
    "question_vi": "Điều nào sau đây thể hiện chính xác cách tiếp cận thử nghiệm đầu tiên?",
    "options_vi": {
      "A": "Các thử nghiệm bắt nguồn từ tiêu chí chấp nhận và chạy để kiểm tra xem mã có vượt qua các thử nghiệm này không",
      "B": "Hành vi của ứng dụng được viết ở định dạng Cho trước/Khi/Sau đó và các bài kiểm tra sau đó được viết và chạy",
      "C": "Đầu tiên các bài kiểm tra thất bại, sau đó mã được viết để vượt qua các bài kiểm tra và điều này được lặp lại",
      "D": "Mã được tái cấu trúc trước, sau đó các bài kiểm tra được viết và chạy"
    },
    "explanation_vi": "Đáp án đúng là C: Đầu tiên các bài kiểm tra thất bại sau đó mã được viết để vượt qua các bài kiểm tra và việc này được lặp lại"
  },
  {
    "id": 116,
    "topic": "Exam A",
    "question": "Which ONE of the following statements is correct?",
    "options": {
      "A": "Static analysis can be used against a work product containing unstructured artifacts",
      "B": "There may be legal issues in performing static testing on a commercially available executable library",
      "C": "Difficult to interpret work products are best tested using static analysis",
      "D": "Test cases can be tested using static testing techniques but not the models"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: There may be legal issues in performing static testing on a commercially available executable library",
    "question_vi": "MỘT trong những khẳng định sau đây là đúng?",
    "options_vi": {
      "A": "Phân tích tĩnh có thể được sử dụng đối với sản phẩm công việc có chứa các thành phần phi cấu trúc",
      "B": "Có thể có vấn đề pháp lý khi thực hiện thử nghiệm tĩnh trên thư viện thực thi có sẵn trên thị trường",
      "C": "Khó diễn giải các sản phẩm công việc được kiểm tra tốt nhất bằng cách sử dụng phân tích tĩnh",
      "D": "Các trường hợp thử nghiệm có thể được thử nghiệm bằng cách sử dụng các kỹ thuật thử nghiệm tĩnh nhưng không phải bằng mô hình"
    },
    "explanation_vi": "Đáp án đúng là B: Có thể có vấn đề pháp lý khi thực hiện thử nghiệm tĩnh trên thư viện thực thi có sẵn trên thị trường"
  },
  {
    "id": 117,
    "topic": "Exam A",
    "question": "A test manager has started a cycle of testing for an e-commerce application. The reason for testing is the change in the protocol for connecting to the payment gateway because of new regulations. Which of the following correctly names this type of testing?",
    "options": {
      "A": "Beta testing",
      "B": "Retirement testing",
      "C": "System integration testing",
      "D": "Maintenance testing"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Maintenance testing",
    "question_vi": "Người quản lý thử nghiệm đã bắt đầu chu kỳ thử nghiệm cho một ứng dụng thương mại điện tử. Nguyên nhân thử nghiệm là do thay đổi giao thức kết nối với cổng thanh toán do quy định mới. Câu nào sau đây gọi đúng tên loại thử nghiệm này?",
    "options_vi": {
      "A": "Thử nghiệm beta",
      "B": "Kiểm tra nghỉ hưu",
      "C": "Kiểm thử tích hợp hệ thống",
      "D": "Kiểm tra bảo trì"
    },
    "explanation_vi": "Đáp án đúng là D: Kiểm tra bảo trì"
  },
  {
    "id": 118,
    "topic": "Exam A",
    "question": "An organization is working on updating test cases for a particular module of their software. Sam updated a set of test cases yesterday and saved the new version on his PC. Unfortunately, the hard disk of his PC crashed and his work was lost. The IT department of the organization restored the contents of his hard disk with the last available back-up - from the previous morning. However, the changes made by him yesterday were lost forever. Which of the following tools had it been used, would have prevented the loss of Sam's updates?",
    "options": {
      "A": "Incident Management Tool",
      "B": "Configuration Management Tool",
      "C": "Backup tool",
      "D": "Test Execution tool"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Configuration Management Tool",
    "question_vi": "Một tổ chức đang nỗ lực cập nhật các trường hợp thử nghiệm cho một mô-đun cụ thể trong phần mềm của họ. Hôm qua Sam đã cập nhật một bộ test case và lưu phiên bản mới vào PC của mình. Thật không may, đĩa cứng máy tính của anh ấy bị hỏng và công việc của anh ấy bị mất. Bộ phận CNTT của tổ chức đã khôi phục nội dung trên đĩa cứng của anh ấy bằng bản sao lưu cuối cùng có sẵn - từ sáng hôm trước. Tuy nhiên, những thay đổi do anh thực hiện ngày hôm qua đã bị mất vĩnh viễn. Công cụ nào sau đây đã được sử dụng có thể ngăn chặn việc mất các bản cập nhật của Sam?",
    "options_vi": {
      "A": "Công cụ quản lý sự cố",
      "B": "Công cụ quản lý cấu hình",
      "C": "Công cụ sao lưu",
      "D": "Công cụ thực hiện kiểm tra"
    },
    "explanation_vi": "Câu trả lời đúng là B: Công cụ quản lý cấu hình"
  },
  {
    "id": 119,
    "topic": "Exam A",
    "question": "Which of the following statements is CORRECT about White-box testing?",
    "options": {
      "A": "White-box testing helps find defects because they can be used to measure statement coverage",
      "B": "White-box testing helps find defects because it focuses on defects rather than failures",
      "C": "White-box testing helps find defects even when specifications are vague because it takes into account the code",
      "D": "White-box testing helps find defects because it provides for requirements-based coverage"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: White-box testing helps find defects even when specifications are vague because it takes into account the code",
    "question_vi": "Phát biểu nào sau đây ĐÚNG về kiểm thử hộp trắng?",
    "options_vi": {
      "A": "Kiểm thử hộp trắng giúp tìm ra các lỗi vì chúng có thể được sử dụng để đo mức độ bao phủ của câu lệnh",
      "B": "Kiểm thử hộp trắng giúp tìm ra lỗi vì nó tập trung vào lỗi hơn là lỗi",
      "C": "Kiểm thử hộp trắng giúp tìm ra lỗi ngay cả khi thông số kỹ thuật không rõ ràng vì nó tính đến mã",
      "D": "Kiểm thử hộp trắng giúp tìm ra lỗi vì nó cung cấp phạm vi bao phủ dựa trên yêu cầu"
    },
    "explanation_vi": "Đáp án đúng là C: Kiểm thử hộp trắng giúp tìm ra lỗi ngay cả khi thông số kỹ thuật còn mơ hồ vì nó tính đến mã"
  },
  {
    "id": 120,
    "topic": "Exam A",
    "question": "Which of the following types of bug are more likely to be found by static testing then by dynamic testing?",
    "options": {
      "A": "Variables that were declared in the code without initialization",
      "B": "Functions that take much longer time to complete than expected",
      "C": "Crashes of the application",
      "D": "A sub-system that does not perform the intended functionality"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Variables that were declared in the code without initialization",
    "question_vi": "Loại lỗi nào sau đây có nhiều khả năng được tìm thấy bằng thử nghiệm tĩnh hơn là bằng thử nghiệm động?",
    "options_vi": {
      "A": "Các biến được khai báo trong mã mà không cần khởi tạo",
      "B": "Các chức năng mất nhiều thời gian để hoàn thành hơn dự kiến",
      "C": "Sự cố của ứng dụng",
      "D": "Một hệ thống con không thực hiện được chức năng dự định"
    },
    "explanation_vi": "Đáp án đúng là A: Các biến được khai báo trong code chưa được khởi tạo"
  },
  {
    "id": 121,
    "topic": "Exam A",
    "question": "A tester created a decision table (DT) given below. While reviewing the DT some of the actions for the given conditions were found to be incorrect. The user is trying to view the profile which of the given conditions has CORRECT action(s) listed?",
    "options": {
      "A": "C1",
      "B": "C2",
      "C": "C3",
      "D": "C4"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: C2",
    "question_vi": "Người thử nghiệm đã tạo bảng quyết định (DT) được đưa ra dưới đây. Trong khi xem xét DT, một số hành động đối với các điều kiện nhất định được phát hiện là không chính xác. Người dùng đang cố gắng xem hồ sơ, điều kiện nào trong số các điều kiện đã cho có (các) hành động ĐÚNG được liệt kê?",
    "options_vi": {
      "A": "C1",
      "B": "C2",
      "C": "C3",
      "D": "C4"
    },
    "explanation_vi": "Câu trả lời đúng là B: C2"
  },
  {
    "id": 122,
    "topic": "Exam A",
    "question": "Which of the following is NOT a typical debugging activity when a failure is triggered by dynamic testing?",
    "options": {
      "A": "Adding new test cases",
      "B": "Diagnosing the root cause",
      "C": "Fixing the cause",
      "D": "Reproducing the failure"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Adding new test cases",
    "question_vi": "Điều nào sau đây KHÔNG phải là hoạt động gỡ lỗi điển hình khi lỗi được kích hoạt bởi thử nghiệm động?",
    "options_vi": {
      "A": "Thêm trường hợp thử nghiệm mới",
      "B": "Chẩn đoán nguyên nhân gốc rễ",
      "C": "Khắc phục nguyên nhân",
      "D": "Tái tạo sự thất bại"
    },
    "explanation_vi": "Đáp án đúng là A: Thêm test case mới"
  },
  {
    "id": 123,
    "topic": "Exam A",
    "question": "An agile software development organization has recently hired a senior tester. The organization has distributed teams spread across time zones. They need to share test status with various stakeholders including upper management and customers at a regular interval. Which of the following statements seems to be correct with regards to the communication?",
    "options": {
      "A": "Since the stakeholders include upper management, formal reports delivered face-to-face are critical",
      "B": "Since the stakeholders include customers frequent informal communication without a specific frequency works better",
      "C": "Distributed nature of teams working in various time zones means email communication will work better.",
      "D": "Agile nature of the project means very less documentation and hence the status need not be documented and shared in a formal manner"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Distributed nature of teams working in various time zones means email communication will work better.",
    "question_vi": "Một tổ chức phát triển phần mềm linh hoạt gần đây đã thuê một nhân viên kiểm thử cấp cao. Tổ chức này đã phân bổ các nhóm trải rộng trên các múi giờ. Họ cần chia sẻ trạng thái thử nghiệm với các bên liên quan khác nhau bao gồm quản lý cấp trên và khách hàng một cách đều đặn. Phát biểu nào sau đây có vẻ đúng khi nói về giao tiếp?",
    "options_vi": {
      "A": "Vì các bên liên quan bao gồm quản lý cấp trên nên các báo cáo chính thức được gửi trực tiếp là rất quan trọng.",
      "B": "Vì các bên liên quan bao gồm khách hàng nên giao tiếp không chính thức thường xuyên mà không có tần suất cụ thể sẽ hoạt động tốt hơn",
      "C": "Tính chất phân tán của các nhóm làm việc ở các múi giờ khác nhau có nghĩa là giao tiếp qua email sẽ hoạt động tốt hơn.",
      "D": "Bản chất linh hoạt của dự án có nghĩa là có rất ít tài liệu và do đó trạng thái không cần phải được ghi lại và chia sẻ một cách chính thức"
    },
    "explanation_vi": "Đáp án đúng là C: Tính chất phân tán của các nhóm làm việc ở các múi giờ khác nhau có nghĩa là việc liên lạc qua email sẽ hoạt động tốt hơn."
  },
  {
    "id": 124,
    "topic": "Exam A",
    "question": "Consider the following defect report for an Exam Booking System. Defect ID: ST1041 | Title: Unable to cancel an exam booking | Severity: Very High | Priority: Very High | Environment: Windows 10, Firefox Description: When attempting to cancel an exam booking using the cancel exam feature, the system does not cancel the exam even though it shows a message that the exam has been cancelled. Which ONE of the following indicates the information that should be added to the description for reproducing the defect easily?",
    "options": {
      "A": "Repeating the test case with different browsers and logging a separate defect for each one of them.",
      "B": "The defect Id used is alphanumeric in nature. It should be a number only.",
      "C": "Providing better severity and priority. It is not clear why this is a high severity problem as the exams can be booked without any problem.",
      "D": "Providing exact steps that lead to this defect. It is not clear from the description if this is a problem for any scheduled exam or for a specific user."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Providing exact steps that lead to this defect. It is not clear from the description if this is a problem for any scheduled exam or for a specific user.",
    "question_vi": "Hãy xem xét báo cáo lỗi sau đây của Hệ thống đăng ký bài kiểm tra. ID lỗi: ST1041 | Tiêu đề: Không thể hủy đăng ký thi | Mức độ nghiêm trọng: Rất cao | Ưu tiên: Rất cao | Môi trường: Windows 10, Firefox Mô tả: Khi cố gắng hủy đăng ký bài kiểm tra bằng tính năng hủy bài kiểm tra, hệ thống không hủy bài kiểm tra mặc dù nó hiển thị thông báo rằng bài kiểm tra đã bị hủy. MỘT trong những điều sau đây chỉ ra thông tin cần được thêm vào mô tả để tái tạo lỗi một cách dễ dàng?",
    "options_vi": {
      "A": "Lặp lại trường hợp thử nghiệm với các trình duyệt khác nhau và ghi lại lỗi riêng cho từng trình duyệt.",
      "B": "Id lỗi được sử dụng có bản chất là chữ và số. Nó chỉ nên là một con số.",
      "C": "Cung cấp mức độ nghiêm trọng và ưu tiên tốt hơn. Không rõ tại sao đây lại là một vấn đề có mức độ nghiêm trọng cao vì các kỳ thi có thể được đăng ký mà không gặp vấn đề gì.",
      "D": "Cung cấp các bước chính xác dẫn đến lỗi này. Trong phần mô tả, không rõ liệu đây có phải là vấn đề đối với bất kỳ kỳ thi đã lên lịch nào hay đối với một người dùng cụ thể hay không."
    },
    "explanation_vi": "Đáp án đúng là D: Cung cấp các bước chính xác dẫn đến lỗi này. Trong phần mô tả, không rõ liệu đây có phải là vấn đề đối với bất kỳ kỳ thi đã lên lịch nào hay đối với một người dùng cụ thể hay không."
  },
  {
    "id": 125,
    "topic": "Exam A",
    "question": "Calculate the measurement error SD for the following estimates done using three-point estimation technique: Most optimistic effort (a) -120 person days Most likely effort (m) -180 person days Most pessimistic effort (b) - 240 person days",
    "options": {
      "A": "20",
      "B": "120",
      "C": "180",
      "D": "197"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: 20",
    "question_vi": "Tính sai số đo SD cho các ước tính sau được thực hiện bằng kỹ thuật ước lượng ba điểm: Nỗ lực lạc quan nhất (a) -120 ngày nỗ lực có thể xảy ra nhất (m) -180 ngày nỗ lực bi quan nhất (b) - 240 ngày người",
    "options_vi": {
      "A": "20",
      "B": "120",
      "C": "180",
      "D": "197"
    },
    "explanation_vi": "Câu trả lời đúng là A: 20"
  },
  {
    "id": 126,
    "topic": "Exam A",
    "question": "Scenario “Big Drop”: The management of the company “The Big Drop” has instructed the Product Team to configure the discounts in the sales terminals so that frequent customers receive an additional discount on top of a bulk discount, based on the following table. You must design test cases to represent all POSSIBLE and REAL business scenarios. Test cases should be generated using the input data provided in the table above. How many POSSIBLE decision rules can be extracted from the table above?",
    "options": {
      "A": "5 decision rules",
      "B": "6 decision rules",
      "C": "32 decision rules",
      "D": "8 decision rules"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: 6 decision rules",
    "question_vi": "Kịch bản “Sự sụt giảm lớn”: Ban quản lý của công ty “The Big Drop” đã hướng dẫn Nhóm sản phẩm định cấu hình các khoản giảm giá trong các thiết bị đầu cuối bán hàng để khách hàng thường xuyên nhận được khoản giảm giá bổ sung ngoài mức giảm giá số lượng lớn, dựa trên bảng sau. Bạn phải thiết kế các trường hợp kiểm thử để thể hiện tất cả các kịch bản kinh doanh CÓ THỂ và THỰC SỰ. Các trường hợp thử nghiệm phải được tạo bằng cách sử dụng dữ liệu đầu vào được cung cấp trong bảng trên. Có bao nhiêu quy tắc quyết định CÓ THỂ được rút ra từ bảng trên?",
    "options_vi": {
      "A": "5 quy tắc quyết định",
      "B": "6 quy tắc quyết định",
      "C": "32 quy tắc quyết định",
      "D": "8 quy tắc quyết định"
    },
    "explanation_vi": "Đáp án đúng là B: 6 quy tắc quyết định"
  },
  {
    "id": 127,
    "topic": "Exam A",
    "question": "Which ONE of the following options is a PRODUCT risk and NOT a PROJECT risk?",
    "options": {
      "A": "Incorrect calculation logic in the software, leading to inaccurate results.",
      "B": "Poor communication between team members, making project management more difficult.",
      "C": "Staff shortages in the project leading to scheduling problems.",
      "D": "Delays in the delivery of work products by the project team."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Incorrect calculation logic in the software, leading to inaccurate results.",
    "question_vi": "MỘT trong những lựa chọn sau đây là rủi ro SẢN PHẨM và KHÔNG phải là rủi ro DỰ ÁN?",
    "options_vi": {
      "A": "Logic tính toán sai trong phần mềm dẫn đến kết quả không chính xác.",
      "B": "Giao tiếp kém giữa các thành viên trong nhóm, khiến việc quản lý dự án trở nên khó khăn hơn.",
      "C": "Sự thiếu hụt nhân sự trong dự án dẫn đến các vấn đề về lập kế hoạch.",
      "D": "Sự chậm trễ trong việc bàn giao sản phẩm của nhóm dự án."
    },
    "explanation_vi": "Đáp án đúng là A: Logic tính toán trong phần mềm không chính xác dẫn đến kết quả không chính xác."
  },
  {
    "id": 128,
    "topic": "Exam A",
    "question": "Consider the following iteration planning tasks where a tester can provide value: • Break down user stories into tasks (particularly testing tasks) • Estimate test effort for all testing tasks • Identify and refine functional and non-functional aspects of the test object. Which ONE of the following tasks should be ADDED to the above list?",
    "options": {
      "A": "Determining the test strategy",
      "B": "Participating in the detailed risk analysis of user stories and determining their testability",
      "C": "Planning the testing for the release",
      "D": "Writing testable user stories and acceptance criteria"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Participating in the detailed risk analysis of user stories and determining their testability",
    "question_vi": "Hãy xem xét các nhiệm vụ lập kế hoạch lặp lại sau đây mà người kiểm tra có thể cung cấp giá trị: • Chia câu chuyện của người dùng thành các nhiệm vụ (đặc biệt là các nhiệm vụ kiểm tra) • Ước tính nỗ lực kiểm tra cho tất cả các nhiệm vụ kiểm tra • Xác định và tinh chỉnh các khía cạnh chức năng và phi chức năng của đối tượng kiểm tra. MỘT trong những nhiệm vụ sau đây nên được THÊM vào danh sách trên?",
    "options_vi": {
      "A": "Xác định chiến lược thử nghiệm",
      "B": "Tham gia phân tích rủi ro chi tiết về các câu chuyện của người dùng và xác định khả năng kiểm thử của chúng",
      "C": "Lập kế hoạch thử nghiệm cho việc phát hành",
      "D": "Viết các câu chuyện của người dùng có thể kiểm chứng và tiêu chí chấp nhận"
    },
    "explanation_vi": "Đáp án đúng là B: Tham gia phân tích rủi ro chi tiết về các câu chuyện của người dùng và xác định khả năng kiểm thử của chúng"
  },
  {
    "id": 129,
    "topic": "Exam A",
    "question": "Which ONE of the following options MOST ACCURATELY describes statement testing?",
    "options": {
      "A": "In statement testing, the coverage items are control flow transfers between branches. The aim is to design test cases to exercise branches in the code until an acceptable level of coverage is achieved, expressed as a percentage.",
      "B": "In statement testing, the coverage items are decisions and statements. The aim is to design test cases that exercise statements in the code until an acceptable level of coverage is achieved, expressed as a percentage.",
      "C": "In statement testing, the coverage items are branches, and the aim is to design test cases to exercise branches in the code until an acceptable level of coverage is achieved, expressed as a percentage.",
      "D": "In statement testing, the coverage items are executable statements. The aim is to design test cases that exercise statements in the code until an acceptable level of coverage is achieved, expressed as a percentage."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: In statement testing, the coverage items are executable statements. The aim is to design test cases that exercise statements in the code until an acceptable level of coverage is achieved, expressed as a percentage.",
    "question_vi": "MỘT trong những tùy chọn sau đây mô tả CHÍNH XÁC NHẤT về kiểm tra câu lệnh?",
    "options_vi": {
      "A": "Trong thử nghiệm câu lệnh, các mục bao phủ là điều khiển chuyển luồng giữa các nhánh. Mục đích là thiết kế các trường hợp thử nghiệm để thực hiện các nhánh trong mã cho đến khi đạt được mức độ bao phủ có thể chấp nhận được, được biểu thị bằng phần trăm.",
      "B": "Trong kiểm tra câu lệnh, mục bao phủ là các quyết định và câu lệnh. Mục đích là để thiết kế các trường hợp thử nghiệm thực hiện các câu lệnh trong mã cho đến khi đạt được mức độ bao phủ có thể chấp nhận được, được biểu thị bằng phần trăm.",
      "C": "Trong thử nghiệm câu lệnh, các mục bao phủ là các nhánh và mục đích là thiết kế các trường hợp thử nghiệm để thực hiện các nhánh trong mã cho đến khi đạt được mức độ bao phủ chấp nhận được, được biểu thị bằng phần trăm.",
      "D": "Trong kiểm tra câu lệnh, các mục bảo hiểm là các câu lệnh có thể thực thi được. Mục đích là để thiết kế các trường hợp thử nghiệm thực hiện các câu lệnh trong mã cho đến khi đạt được mức độ bao phủ có thể chấp nhận được, được biểu thị bằng phần trăm."
    },
    "explanation_vi": "Đáp án đúng là D: Trong kiểm tra câu lệnh, các mục bảo hiểm là các câu lệnh có thể thực thi được. Mục đích là để thiết kế các trường hợp thử nghiệm thực hiện các câu lệnh trong mã cho đến khi đạt được mức độ bao phủ có thể chấp nhận được, được biểu thị bằng phần trăm."
  },
  {
    "id": 130,
    "topic": "Exam A",
    "question": "Scenario “Happy Tomatoes” An intelligent application for agricultural use incorporates temperature sensors located at different points of an enclosure. The sensors measure and record the temperature at regular intervals and extract the statistical values for these measurements. These values include the average daily temperature. A new variety of tomatoes is currently being grown and the “World Organization for Happy Tomatoes” has established temperature ranges related to vegetative development. When the system establishes that the average temperature is within a specific range, it emits a value that will be used to monitor and control the crop. Using the Boundary Value Analysis technique (in its two-point variant), identify the set of input values that provides the HIGHEST coverage.",
    "options": {
      "A": "{7, 8, 21, 22, 29, 30}",
      "B": "{7, 8, 22, 23, 29, 30}",
      "C": "{6, 7, 8, 21, 22, 29, 31}",
      "D": "{6, 7, 21, 22, 29, 30}"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: {6, 7, 8, 21, 22, 29, 31}",
    "question_vi": "Kịch bản “Happy Tomatoes” Một ứng dụng thông minh dành cho mục đích nông nghiệp kết hợp các cảm biến nhiệt độ được đặt tại các điểm khác nhau của khu vực bao vây. Các cảm biến đo và ghi lại nhiệt độ đều đặn và trích xuất các giá trị thống kê cho các phép đo này. Những giá trị này bao gồm nhiệt độ trung bình hàng ngày. Một loại cà chua mới hiện đang được trồng và “Tổ chức Cà chua Hạnh phúc Thế giới” đã thiết lập các phạm vi nhiệt độ liên quan đến sự phát triển của sinh dưỡng. Khi hệ thống xác định rằng nhiệt độ trung bình nằm trong một phạm vi cụ thể, nó sẽ phát ra một giá trị sẽ được sử dụng để theo dõi và kiểm soát cây trồng. Sử dụng kỹ thuật Phân tích giá trị biên (ở dạng hai điểm), xác định tập hợp các giá trị đầu vào cung cấp phạm vi bao phủ CAO NHẤT.",
    "options_vi": {
      "A": "{7, 8, 21, 22, 29, 30}",
      "B": "{7, 8, 22, 23, 29, 30}",
      "C": "{6, 7, 8, 21, 22, 29, 31}",
      "D": "{6, 7, 21, 22, 29, 30}"
    },
    "explanation_vi": "Đáp án đúng là C: {6, 7, 8, 21, 22, 29, 31}"
  },
  {
    "id": 131,
    "topic": "Exam A",
    "question": "Scenario “Happy Tomatoes” An intelligent application for agricultural use incorporates temperature sensors located at different points of an enclosure. The sensors measure and record the temperature at regular intervals and extract the statistical values for these measurements. These values include the average daily temperature. A new variety of tomatoes is currently being grown and the “World Organization for Happy Tomatoes” has established temperature ranges related to vegetative development. When the system establishes that the average temperature is within a specific range, it emits a value that will be used to monitor and control the crop. When running test case TC_59 the actual result for t = 35 degrees Celsius is OUTPUT = X. Which information should NOT be included in the defect report?",
    "options": {
      "A": "Identification of the test object and test environment",
      "B": "A concise title and a short summary of the defect being reported",
      "C": "Description of the structure of the test team",
      "D": "Expected results and actual results"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Description of the structure of the test team",
    "question_vi": "Kịch bản “Happy Tomatoes” Một ứng dụng thông minh dành cho mục đích nông nghiệp kết hợp các cảm biến nhiệt độ được đặt tại các điểm khác nhau của khu vực bao vây. Các cảm biến đo và ghi lại nhiệt độ đều đặn và trích xuất các giá trị thống kê cho các phép đo này. Những giá trị này bao gồm nhiệt độ trung bình hàng ngày. Một loại cà chua mới hiện đang được trồng và “Tổ chức Cà chua Hạnh phúc Thế giới” đã thiết lập các phạm vi nhiệt độ liên quan đến sự phát triển của sinh dưỡng. Khi hệ thống xác định rằng nhiệt độ trung bình nằm trong một phạm vi cụ thể, nó sẽ phát ra một giá trị sẽ được sử dụng để theo dõi và kiểm soát cây trồng. Khi chạy trường hợp kiểm thử TC_59, kết quả thực tế với t = 35 độ C là OUTPUT = X. Thông tin nào KHÔNG được đưa vào báo cáo lỗi?",
    "options_vi": {
      "A": "Xác định đối tượng thử nghiệm và môi trường thử nghiệm",
      "B": "Tiêu đề ngắn gọn và tóm tắt ngắn gọn về lỗi được báo cáo",
      "C": "Mô tả cơ cấu của nhóm thử nghiệm",
      "D": "Kết quả mong đợi và kết quả thực tế"
    },
    "explanation_vi": "Đáp án đúng là C: Mô tả cơ cấu tổ kiểm tra"
  },
  {
    "id": 132,
    "topic": "Exam A",
    "question": "Scenario “Happy Tomatoes” An intelligent application for agricultural use incorporates temperature sensors located at different points of an enclosure. The sensors measure and record the temperature at regular intervals and extract the statistical values for these measurements. These values include the average daily temperature. A new variety of tomatoes is currently being grown and the “World Organization for Happy Tomatoes” has established temperature ranges related to vegetative development. When the system establishes that the average temperature is within a specific range, it emits a value that will be used to monitor and control the crop. Using the equivalence partitioning technique, identify the set of input values that provides the HIGHEST coverage.",
    "options": {
      "A": "{7, 10, 21, 40}",
      "B": "{8, 10, 25, 40}",
      "C": "{7, 10, 25, 29}",
      "D": "{7, 10, 25, 40}"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: {7, 10, 25, 40}",
    "question_vi": "Kịch bản “Happy Tomatoes” Một ứng dụng thông minh dành cho mục đích nông nghiệp kết hợp các cảm biến nhiệt độ được đặt tại các điểm khác nhau của khu vực bao vây. Các cảm biến đo và ghi lại nhiệt độ đều đặn và trích xuất các giá trị thống kê cho các phép đo này. Những giá trị này bao gồm nhiệt độ trung bình hàng ngày. Một loại cà chua mới hiện đang được trồng và “Tổ chức Cà chua Hạnh phúc Thế giới” đã thiết lập các phạm vi nhiệt độ liên quan đến sự phát triển của sinh dưỡng. Khi hệ thống xác định rằng nhiệt độ trung bình nằm trong một phạm vi cụ thể, nó sẽ phát ra một giá trị sẽ được sử dụng để theo dõi và kiểm soát cây trồng. Sử dụng kỹ thuật phân vùng tương đương, xác định tập hợp các giá trị đầu vào cung cấp phạm vi bao phủ CAO NHẤT.",
    "options_vi": {
      "A": "{7, 10, 21, 40}",
      "B": "{8, 10, 25, 40}",
      "C": "{7, 10, 25, 29}",
      "D": "{7, 10, 25, 40}"
    },
    "explanation_vi": "Câu trả lời đúng là D: {7, 10, 25, 40}"
  },
  {
    "id": 133,
    "topic": "Exam A",
    "question": "Which ONE of the following options CANNOT be subjected to static analysis?",
    "options": {
      "A": "COTS (Commercial off-the-shelf)",
      "B": "Source code",
      "C": "BPMN (Business Process Modeling and Notation) models",
      "D": "UML (Unified Modeling Language) models"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: COTS (Commercial off-the-shelf)",
    "question_vi": "MỘT trong những lựa chọn sau đây KHÔNG THỂ được phân tích tĩnh?",
    "options_vi": {
      "A": "COTS (Thương mại sẵn có)",
      "B": "Mã nguồn",
      "C": "Mô hình BPMN (Mô hình hóa và ký hiệu quy trình nghiệp vụ)",
      "D": "Mô hình UML (Ngôn ngữ mô hình hóa thống nhất)"
    },
    "explanation_vi": "Đáp án đúng là A: COTS (Commercial off-the-shelf)"
  },
  {
    "id": 134,
    "topic": "Exam A",
    "question": "Which ONE of the following statements about the objectives of confirmation and regression testing is the BEST?",
    "options": {
      "A": "The purpose of confirmation testing is to confirm that the defect giving rise to a failure has been successfully fixed. The regression test aims to ensure that no defects have been introduced or discovered in unmodified areas of the software as a result of the changes made.",
      "B": "The purpose of confirmation testing is to confirm that the defect giving rise to a failure has been satisfactorily fixed. The regression test aims to ensure that no defects have been introduced or discovered in modified areas of the software as a result of the changes made.",
      "C": "Confirmation testing aims to confirm that the observed failure is not a false positive. The regression test aims to ensure that no defects have been introduced or discovered in unmodified areas of the software as a result of the changes made.",
      "D": "The purpose of regression testing is to confirm that the defect giving rise to a failure has been satisfactorily resolved. The purpose of the confirmation testing is to ensure that no defects have been introduced or discovered in unmodified areas of the software as a result of the changes made."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: The purpose of confirmation testing is to confirm that the defect giving rise to a failure has been successfully fixed. The regression test aims to ensure that no defects have been introduced or discovered in unmodified areas of the software as a result of the changes made.",
    "question_vi": "MỘT trong những tuyên bố sau đây về mục tiêu của thử nghiệm xác nhận và hồi quy là TỐT NHẤT?",
    "options_vi": {
      "A": "Mục đích của kiểm tra xác nhận là để xác nhận rằng lỗi dẫn đến lỗi đã được khắc phục thành công. Kiểm tra hồi quy nhằm mục đích đảm bảo rằng không có lỗi nào được đưa ra hoặc phát hiện trong các khu vực chưa được sửa đổi của phần mềm do những thay đổi được thực hiện.",
      "B": "Mục đích của kiểm tra xác nhận là để xác nhận rằng lỗi dẫn đến lỗi đã được khắc phục thỏa đáng. Kiểm tra hồi quy nhằm mục đích đảm bảo rằng không có lỗi nào được đưa ra hoặc phát hiện trong các khu vực được sửa đổi của phần mềm do những thay đổi được thực hiện.",
      "C": "Kiểm tra xác nhận nhằm mục đích xác nhận rằng lỗi quan sát được không phải là dương tính giả. Kiểm tra hồi quy nhằm mục đích đảm bảo rằng không có lỗi nào được đưa ra hoặc phát hiện trong các khu vực chưa được sửa đổi của phần mềm do những thay đổi được thực hiện.",
      "D": "Mục đích của kiểm tra hồi quy là để xác nhận rằng lỗi dẫn đến lỗi đã được giải quyết thỏa đáng. Mục đích của việc kiểm tra xác nhận là để đảm bảo rằng không có lỗi nào được đưa ra hoặc phát hiện ở các khu vực chưa được sửa đổi của phần mềm do những thay đổi được thực hiện."
    },
    "explanation_vi": "Đáp án đúng là A: Mục đích của việc kiểm tra xác nhận là để xác nhận rằng lỗi dẫn đến lỗi đã được khắc phục thành công. Kiểm tra hồi quy nhằm mục đích đảm bảo rằng không có lỗi nào được đưa ra hoặc phát hiện trong các khu vực chưa được sửa đổi của phần mềm do những thay đổi được thực hiện."
  },
  {
    "id": 135,
    "topic": "Exam A",
    "question": "Consider the following list of possible benefits of retrospectives (A to D): [A] Team bonding and learning [B] Increased test effectiveness/efficiency [C] Improved quality of the test basis [D] Better cooperation between development and testing ... and the list of possible characteristics of retrospectives (1 to 4) that enable achieving these benefits: 1. The possibility of implementing suggestions for process improvement 2. The opportunity to raise problems and propose points for improvement 3. The regular review and optimization of the collaboration between team members 4. The possibility of addressing and solving deficiencies in the extent and quality of the requirements Which ONE of the following options presents the BEST mapping between benefits and characteristics from retrospectives?",
    "options": {
      "A": "A1 – B4 – C3 – D2",
      "B": "A2 – B1 – C4 – D3",
      "C": "A4 – B3 – C2 – D1",
      "D": "A3 – B2 – C1 – D4"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: A2 – B1 – C4 – D3",
    "question_vi": "Hãy xem xét danh sách sau đây về các lợi ích có thể có của hoạt động cải tiến (A đến D): [A] Gắn kết và học hỏi trong nhóm [B] Tăng hiệu quả/hiệu quả kiểm tra [C] Cải thiện chất lượng của cơ sở kiểm tra [D] Hợp tác tốt hơn giữa phát triển và thử nghiệm ... và danh sách các đặc điểm có thể có của cải tiến (1 đến 4) cho phép đạt được những lợi ích này: 1. Khả năng thực hiện các đề xuất cải tiến quy trình 2. Cơ hội nêu ra vấn đề và đề xuất các điểm cần cải tiến 3. Đánh giá thường xuyên và tối ưu hóa sự hợp tác giữa các thành viên trong nhóm 4. Khả năng giải quyết và giải quyết những thiếu sót về mức độ và chất lượng của các yêu cầu MỘT trong các lựa chọn sau đây thể hiện sự liên kết TỐT NHẤT giữa lợi ích và đặc điểm từ các nghiên cứu hồi cứu?",
    "options_vi": {
      "A": "A1 – B4 – C3 – D2",
      "B": "A2 – B1 – C4 – D3",
      "C": "A4 – B3 – C2 – D1",
      "D": "A3 – B2 – C1 – D4"
    },
    "explanation_vi": "Câu trả lời đúng là B: A2 – B1 – C4 – D3"
  },
  {
    "id": 136,
    "topic": "Exam A",
    "question": "Which ONE of the following options explains a benefit of independent testing the BEST?",
    "options": {
      "A": "The testers can be isolated from the development team and thus avoid acquiring the same bias as the developers.",
      "B": "Independent testers may lack information regarding the test object.",
      "C": "Independent testers are likely to recognize different types of failures compared to developers.",
      "D": "Developers may lose a sense of responsibility for the quality of the product they develop."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Independent testers are likely to recognize different types of failures compared to developers.",
    "question_vi": "MỘT trong những lựa chọn sau đây giải thích lợi ích TỐT NHẤT của thử nghiệm độc lập?",
    "options_vi": {
      "A": "Những người thử nghiệm có thể bị tách biệt khỏi nhóm phát triển và do đó tránh được sự thiên vị giống như các nhà phát triển.",
      "B": "Người thử nghiệm độc lập có thể thiếu thông tin về đối tượng thử nghiệm.",
      "C": "Những người thử nghiệm độc lập có khả năng nhận ra các loại lỗi khác nhau so với các nhà phát triển.",
      "D": "Các nhà phát triển có thể mất đi ý thức trách nhiệm về chất lượng sản phẩm mà họ phát triển."
    },
    "explanation_vi": "Đáp án đúng là C: Những người thử nghiệm độc lập có khả năng nhận ra các loại lỗi khác nhau so với các nhà phát triển."
  },
  {
    "id": 137,
    "topic": "Exam A",
    "question": "Which ONE of the following options is NOT a test objective?",
    "options": {
      "A": "Verifying whether specified requirements have been fulfilled",
      "B": "Triggering failures and finding defects",
      "C": "Finding errors",
      "D": "Validating whether the test object is complete and works as expected by the stakeholders"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Finding errors",
    "question_vi": "MỘT trong những lựa chọn sau đây KHÔNG phải là mục tiêu thử nghiệm?",
    "options_vi": {
      "A": "Xác minh xem các yêu cầu quy định có được đáp ứng hay không",
      "B": "Kích hoạt lỗi và tìm lỗi",
      "C": "Tìm lỗi",
      "D": "Xác thực xem đối tượng thử nghiệm có hoàn chỉnh và hoạt động như mong đợi của các bên liên quan hay không"
    },
    "explanation_vi": "Lời giải đúng là C: Tìm lỗi"
  },
  {
    "id": 138,
    "topic": "Exam A",
    "question": "Consider the following statements (I to V) about software testing: I. Can be applied to non-executable work products. II. Can be used to measure performance efficiency. III. Can lead to the detection of defects. IV. Can find defects directly. V. Can identify unexpected behaviors caused by potential defects. Which ONE of the following options is the list that characterizes static tests the BEST?",
    "options": {
      "A": "Statements I, III, and IV",
      "B": "Statements II, IV, and V",
      "C": "Statements I, II, and IV",
      "D": "Statements II, III, and V"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Statements I, III, and IV",
    "question_vi": "Hãy xem xét các câu sau (I đến V) về kiểm thử phần mềm: I. Có thể áp dụng cho các sản phẩm công việc không thể thực thi được. II. Có thể được sử dụng để đo lường hiệu quả hoạt động. III. Có thể dẫn đến việc phát hiện các khuyết tật. IV. Có thể tìm thấy khuyết điểm trực tiếp. V. Có thể xác định các hành vi không mong muốn do các khiếm khuyết tiềm ẩn gây ra. MỘT trong các tùy chọn sau đây là danh sách đặc trưng cho thử nghiệm tĩnh TỐT NHẤT?",
    "options_vi": {
      "A": "Tuyên bố I, III và IV",
      "B": "Tuyên bố II, IV và V",
      "C": "Phát biểu I, II và IV",
      "D": "Tuyên bố II, III và V"
    },
    "explanation_vi": "Câu trả lời đúng là A: Câu I, III và IV"
  },
  {
    "id": 139,
    "topic": "Exam A",
    "question": "Which ONE of the following options MOST ACCURATELY describes the activities of “testing” and “debugging”?",
    "options": {
      "A": "Testing triggers a failure that is caused by a defect in the software, whereas debugging is concerned with finding the causes of this failure (defects), analyzing these causes, and eliminating them.",
      "B": "Testing triggers a failure that is caused by a defect in the software, whereas debugging is concerned with finding the causes of this failure (defects), analyzing these causes, and reproducing them.",
      "C": "Testing identifies a defect that is caused by an error in the software, whereas debugging is concerned with finding the causes of this defect, analyzing these causes, and eliminating them.",
      "D": "Testing triggers a defect that is caused by an error in the software, whereas debugging is concerned with finding the causes of this defect, analyzing these causes, and eliminating them."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Testing triggers a failure that is caused by a defect in the software, whereas debugging is concerned with finding the causes of this failure (defects), analyzing these causes, and eliminating them.",
    "question_vi": "MỘT trong những lựa chọn sau đây mô tả CHÍNH XÁC NHẤT các hoạt động “thử nghiệm” và “gỡ lỗi”?",
    "options_vi": {
      "A": "Kiểm tra gây ra lỗi do lỗi trong phần mềm, trong khi việc gỡ lỗi liên quan đến việc tìm ra nguyên nhân của lỗi này (lỗi), phân tích các nguyên nhân này và loại bỏ chúng.",
      "B": "Kiểm tra gây ra lỗi do lỗi trong phần mềm, trong khi việc gỡ lỗi liên quan đến việc tìm ra nguyên nhân của lỗi này (lỗi), phân tích các nguyên nhân này và tái tạo chúng.",
      "C": "Kiểm tra xác định lỗi do lỗi trong phần mềm gây ra, trong khi việc gỡ lỗi liên quan đến việc tìm ra nguyên nhân của lỗi này, phân tích các nguyên nhân này và loại bỏ chúng.",
      "D": "Kiểm tra gây ra lỗi do lỗi trong phần mềm, trong khi việc gỡ lỗi liên quan đến việc tìm ra nguyên nhân của lỗi này, phân tích các nguyên nhân này và loại bỏ chúng."
    },
    "explanation_vi": "Đáp án đúng là A: Kiểm tra gây ra lỗi do lỗi trong phần mềm, trong khi việc gỡ lỗi liên quan đến việc tìm ra nguyên nhân của lỗi này (lỗi), phân tích các nguyên nhân này và loại bỏ chúng."
  },
  {
    "id": 140,
    "topic": "Exam A",
    "question": "The following state transition diagram describes the behavior of a control system in terms of its possible modes of operation. The initial start state will be the “NORMAL MODE”. Which ONE of the following test cases covers an INVALID sequence?",
    "options": {
      "A": "NORMAL MODE >> DIAGNOSTIC MODE >> DEGRADED MODE >> EMERGENCY MODE >> DIAGNOSTIC MODE >> NORMAL MODE >> DIAGNOSTIC MODE",
      "B": "NORMAL MODE >> DEGRADED MODE >> NORMAL MODE >> DIAGNOSTIC MODE >> DEGRADED MODE >> EMERGENCY MODE >> DIAGNOSTIC MODE",
      "C": "NORMAL MODE >> DIAGNOSTIC MODE >> DEGRADED MODE >> EMERGENCY MODE >> DIAGNOSTIC MODE >> NORMAL MODE >> DEGRADED MODE",
      "D": "NORMAL MODE >> DIAGNOSTIC MODE >> NORMAL MODE >> DIAGNOSTIC MODE >> EMERGENCY MODE >> DIAGNOSTIC MODE >> NORMAL MODE"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: NORMAL MODE >> DIAGNOSTIC MODE >> NORMAL MODE >> DIAGNOSTIC MODE >> EMERGENCY MODE >> DIAGNOSTIC MODE >> NORMAL MODE",
    "question_vi": "Sơ đồ chuyển đổi trạng thái sau đây mô tả hoạt động của hệ thống điều khiển theo các phương thức hoạt động có thể có của nó. Trạng thái bắt đầu ban đầu sẽ là “CHẾ ĐỘ BÌNH THƯỜNG”. MỘT trong những trường hợp thử nghiệm sau đây bao gồm một chuỗi KHÔNG HỢP LỆ?",
    "options_vi": {
      "A": "CHẾ ĐỘ BÌNH THƯỜNG >> CHẾ ĐỘ CHẨN ĐOÁN >> CHẾ ĐỘ GIẢM GIÁ >> CHẾ ĐỘ KHẨN CẤP >> CHẾ ĐỘ CHẨN ĐOÁN >> CHẾ ĐỘ BÌNH THƯỜNG >> CHẾ ĐỘ CHẨN ĐOÁN",
      "B": "CHẾ ĐỘ BÌNH THƯỜNG >> CHẾ ĐỘ GIẢM GIÁ >> CHẾ ĐỘ BÌNH THƯỜNG >> CHẾ ĐỘ CHẨN ĐOÁN >> CHẾ ĐỘ GIẢM GIÁ >> CHẾ ĐỘ KHẨN CẤP >> CHẾ ĐỘ CHẨN ĐOÁN",
      "C": "CHẾ ĐỘ BÌNH THƯỜNG >> CHẾ ĐỘ CHẨN ĐOÁN >> CHẾ ĐỘ GIẢM GIÁ >> CHẾ ĐỘ KHẨN CẤP >> CHẾ ĐỘ CHẨN ĐOÁN >> CHẾ ĐỘ BÌNH THƯỜNG >> CHẾ ĐỘ GIẢM GIÁ",
      "D": "CHẾ ĐỘ BÌNH THƯỜNG >> CHẾ ĐỘ CHẨN ĐOÁN >> CHẾ ĐỘ BÌNH THƯỜNG >> CHẾ ĐỘ CHẨN ĐOÁN >> CHẾ ĐỘ KHẨN CẤP >> CHẾ ĐỘ CHẨN ĐOÁN >> CHẾ ĐỘ BÌNH THƯỜNG"
    },
    "explanation_vi": "Tạm dịch là D: CHẾ ĐỘ BÌNH THƯỜNG >> CHẾ ĐỘ CHẨN ĐOÁN >> CHẾ ĐỘ BÌNH THƯỜNG >> CHẾ ĐỘ CHẨN ĐOÁN >> CHẾ ĐỘ KHẨN CẤP >> CHẾ ĐỘ CHẨN ĐOÁN >> CHẾ ĐỘ BÌNH THƯỜNG"
  },
  {
    "id": 141,
    "topic": "Exam A",
    "question": "As a result of the joint evaluation of a product version with the customer, it has been concluded that it would be appropriate to retrieve an earlier version of the product and carry out a benchmark. Depending on the result, further development will be carried out based on the current version or the retrieved version. Which mechanism, process, and/or technique will allow the specific version (including the testing work products) of a given software product to be restored?",
    "options": {
      "A": "Defect management",
      "B": "Configuration management",
      "C": "Change management",
      "D": "Risk management"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Configuration management",
    "question_vi": "Dựa trên kết quả đánh giá chung của một phiên bản sản phẩm với khách hàng, người ta đã kết luận rằng việc lấy lại phiên bản cũ hơn của sản phẩm và tiến hành so sánh là phù hợp. Tùy thuộc vào kết quả, việc phát triển thêm sẽ được thực hiện dựa trên phiên bản hiện tại hoặc phiên bản đã truy xuất. Cơ chế, quy trình và/hoặc kỹ thuật nào sẽ cho phép khôi phục phiên bản cụ thể (bao gồm cả các sản phẩm công việc thử nghiệm) của một sản phẩm phần mềm nhất định?",
    "options_vi": {
      "A": "Quản lý lỗi",
      "B": "Quản lý cấu hình",
      "C": "Quản lý thay đổi",
      "D": "Quản lý rủi ro"
    },
    "explanation_vi": "Đáp án đúng là B: Quản lý cấu hình"
  },
  {
    "id": 142,
    "topic": "Exam A",
    "question": "Which ONE of the following tools would be MOST SUITABLE for facilitating the creation of test cases, test data, and test procedures?",
    "options": {
      "A": "Test design and implementation tools are specifically designed for creating test cases, test data, and test procedures.",
      "B": "Static testing tools as they assist the tester in conducting reviews and static analysis.",
      "C": "DevOps tools, as they support the automated build process and CI/CD.",
      "D": "Test execution and coverage tools facilitate the automated execution of tests and the measurement of test coverage."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Test design and implementation tools are specifically designed for creating test cases, test data, and test procedures.",
    "question_vi": "MỘT trong những công cụ sau đây sẽ PHÙ HỢP NHẤT để tạo điều kiện thuận lợi cho việc tạo các trường hợp kiểm thử, dữ liệu kiểm thử và quy trình kiểm thử?",
    "options_vi": {
      "A": "Các công cụ thiết kế và triển khai thử nghiệm được thiết kế đặc biệt để tạo các trường hợp thử nghiệm, dữ liệu thử nghiệm và quy trình thử nghiệm.",
      "B": "Các công cụ kiểm tra tĩnh vì chúng hỗ trợ người kiểm tra tiến hành đánh giá và phân tích tĩnh.",
      "C": "Các công cụ DevOps vì chúng hỗ trợ quy trình xây dựng tự động và CI/CD.",
      "D": "Các công cụ thực hiện và bao phủ kiểm thử tạo điều kiện thuận lợi cho việc thực hiện kiểm thử tự động và đo lường phạm vi kiểm thử."
    },
    "explanation_vi": "Đáp án đúng là A: Các công cụ thiết kế và triển khai thử nghiệm được thiết kế đặc biệt để tạo trường hợp thử nghiệm, dữ liệu thử nghiệm và quy trình thử nghiệm."
  },
  {
    "id": 143,
    "topic": "Exam A",
    "question": "Your organization's test strategy states that it is desirable to use more than one method for estimating the test effort. You are responsible for establishing the test effort for the next project. Based on historical information, the type of project you are going to estimate has a development-to-test effort ratio of 5:3. The initial estimate of the development effort is 450 person-days. Which ONE of the following options corresponds to the estimated test effort using the ratio-based method?",
    "options": {
      "A": "750 person-days",
      "B": "180 person-days",
      "C": "720 person-days",
      "D": "270 person-days"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: 270 person-days",
    "question_vi": "Chiến lược kiểm thử của tổ chức bạn nêu rõ rằng nên sử dụng nhiều phương pháp để ước tính nỗ lực kiểm thử. Bạn chịu trách nhiệm thiết lập nỗ lực thử nghiệm cho dự án tiếp theo. Dựa trên thông tin lịch sử, loại dự án bạn sắp ước tính có tỷ lệ nỗ lực từ phát triển đến thử nghiệm là 5:3. Ước tính ban đầu về nỗ lực phát triển là 450 ngày công. MỘT trong những lựa chọn sau đây tương ứng với nỗ lực thử nghiệm ước tính bằng phương pháp dựa trên tỷ lệ?",
    "options_vi": {
      "A": "750 người-ngày",
      "B": "180 người-ngày",
      "C": "720 người-ngày",
      "D": "270 người-ngày"
    },
    "explanation_vi": "Đáp án đúng là D: 270 người-ngày"
  },
  {
    "id": 144,
    "topic": "Exam A",
    "question": "User Story: As a member of the “Agnotoly” association, I want to be able to pay the association's dues through an automatic payment method so that I can forget about payment deadlines. Acceptance Criteria: • The member can only pay with “Agnosis Master” credit card. • The member must register their cell phone number. • The member must register the credit card in the association's payment system. • The member must select one of the following credit card payment methods: monthly or annual. • For the payment system to proceed with the transaction, the member must accept the terms and conditions applicable to the selected payment method (monthly or annual payment). • If the member accepts the terms and conditions, the payment system sends a message to the member's mobile/cell phone with a one-time password and prompts the member to enter the one-time password. • The payment method is registered in the association's payment system once the one-time key sent by the payment system is verified. • Once the payment method is registered, the association's payment system will charge the member on the first business day of the following month. Remark: The payment method registration is a transactional process; therefore, if the acceptance criteria 1 through 7 are not met, the payment system will revert to its previous state and will not maintain any information that may have been entered. In the test cycle that has just ended, the following objectives have been achieved: • Members of the association have been able to pay association dues with the credit card. • Dues payments have been made on a monthly basis and for more than a year since the initial payment. Which ONE of the following options identifies the acceptance criteria that has NOT been fully covered during the above test cycle?",
    "options": {
      "A": "Acceptance criteria 8 has not been fully covered during the above test cycle.",
      "B": "Acceptance criteria 4 has not been fully covered during the above test cycle.",
      "C": "All acceptance criteria have been fully covered during the above test cycle.",
      "D": "Acceptance criteria 6 has not been fully covered during the above test cycle."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Acceptance criteria 8 has not been fully covered during the above test cycle.",
    "question_vi": "Câu chuyện của người dùng: Là thành viên của hiệp hội “Agnotoly”, tôi muốn có thể thanh toán hội phí của hiệp hội thông qua phương thức thanh toán tự động để tôi có thể quên đi thời hạn thanh toán. Tiêu chí chấp nhận: • Thành viên chỉ có thể thanh toán bằng thẻ tín dụng “Agnosis Master”. • Thành viên phải đăng ký số điện thoại di động của mình. • Thành viên phải đăng ký thẻ tín dụng vào hệ thống thanh toán của hiệp hội. • Thành viên phải chọn một trong các phương thức thanh toán thẻ tín dụng sau: hàng tháng hoặc hàng năm. • Để hệ thống thanh toán có thể tiến hành giao dịch, thành viên phải chấp nhận các điều khoản và điều kiện áp dụng cho phương thức thanh toán đã chọn (thanh toán hàng tháng hoặc hàng năm). • Nếu thành viên chấp nhận các điều khoản và điều kiện, hệ thống thanh toán sẽ gửi tin nhắn đến điện thoại di động/điện thoại di động của thành viên kèm theo mật khẩu một lần và nhắc thành viên nhập mật khẩu một lần. • Phương thức thanh toán được đăng ký trong hệ thống thanh toán của hiệp hội sau khi khóa một lần do hệ thống thanh toán gửi được xác minh. • Sau khi đăng ký phương thức thanh toán, hệ thống thanh toán của hiệp hội sẽ tính phí thành viên vào ngày làm việc đầu tiên của tháng tiếp theo. Lưu ý: Việc đăng ký phương thức thanh toán là một quá trình giao dịch; do đó, nếu không đáp ứng tiêu chí chấp nhận từ 1 đến 7, hệ thống thanh toán sẽ trở lại trạng thái trước đó và sẽ không lưu giữ bất kỳ thông tin nào có thể đã được nhập. Trong chu kỳ thử nghiệm vừa kết thúc, các mục tiêu sau đã đạt được: • Các thành viên của hiệp hội đã có thể thanh toán phí hiệp hội bằng thẻ tín dụng. • Các khoản thanh toán phí được thực hiện hàng tháng và trong hơn một năm kể từ lần thanh toán đầu tiên. MỘT trong những lựa chọn sau đây xác định các tiêu chí chấp nhận chưa được đề cập đầy đủ trong chu kỳ thử nghiệm trên?",
    "options_vi": {
      "A": "Tiêu chí chấp nhận 8 chưa được đề cập đầy đủ trong chu kỳ thử nghiệm trên.",
      "B": "Tiêu chí chấp nhận 4 chưa được đề cập đầy đủ trong chu kỳ thử nghiệm trên.",
      "C": "Tất cả các tiêu chí chấp nhận đã được đáp ứng đầy đủ trong chu kỳ thử nghiệm trên.",
      "D": "Tiêu chí chấp nhận 6 chưa được đề cập đầy đủ trong chu kỳ thử nghiệm trên."
    },
    "explanation_vi": "Đáp án đúng là A: Tiêu chí chấp nhận 8 chưa được đáp ứng đầy đủ trong chu kỳ kiểm tra trên."
  },
  {
    "id": 145,
    "topic": "Exam A",
    "question": "Which ONE of the following activities TYPICALLY belongs to the planning phase of the review process?",
    "options": {
      "A": "A separate defect report is created for each identified defect so that corrective actions can be tracked.",
      "B": "Each reviewer conducts an individual review to identify anomalies, recommendations, and questions.",
      "C": "The purpose and scope of the review are defined, as well as the work product to be reviewed and the exit criteria.",
      "D": "The reviewers analyze and discuss the anomalies found during the review in a joint meeting."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: The purpose and scope of the review are defined, as well as the work product to be reviewed and the exit criteria.",
    "question_vi": "MỘT trong những hoạt động sau đây ĐẶC ​​BIỆT thuộc giai đoạn lập kế hoạch của quá trình xem xét?",
    "options_vi": {
      "A": "Một báo cáo lỗi riêng biệt được tạo cho từng lỗi được xác định để có thể theo dõi các hành động khắc phục.",
      "B": "Mỗi người đánh giá tiến hành đánh giá riêng để xác định những điểm bất thường, đề xuất và câu hỏi.",
      "C": "Mục đích và phạm vi của việc xem xét cũng như sản phẩm công việc cần xem xét và các tiêu chí kết thúc đều được xác định.",
      "D": "Những người đánh giá phân tích và thảo luận về những điểm bất thường được tìm thấy trong quá trình đánh giá trong một cuộc họp chung."
    },
    "explanation_vi": "Đáp án đúng là C: Mục đích và phạm vi của việc đánh giá được xác định cũng như sản phẩm công việc được đánh giá và tiêu chí kết thúc."
  },
  {
    "id": 146,
    "topic": "Exam A",
    "question": "Which ONE of the following options is a practice that does NOT TYPICALLY correspond to a shift left approach?",
    "options": {
      "A": "Reviewing the specification from the perspective of testing.",
      "B": "Write the test cases before writing the code and run the code in a test harness during code implementation.",
      "C": "Using continuous integration (CI) and even better continuous delivery (CD).",
      "D": "Performing non-functional testing starting at the system test level."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Performing non-functional testing starting at the system test level.",
    "question_vi": "MỘT trong những lựa chọn sau đây là một cách thực hành KHÔNG ĐẶC BIỆT tương ứng với cách tiếp cận lệch trái?",
    "options_vi": {
      "A": "Xem xét đặc điểm kỹ thuật từ góc độ thử nghiệm.",
      "B": "Viết các trường hợp kiểm thử trước khi viết mã và chạy mã trong bộ khai thác kiểm thử trong quá trình triển khai mã.",
      "C": "Sử dụng tích hợp liên tục (CI) và phân phối liên tục (CD) thậm chí còn tốt hơn.",
      "D": "Thực hiện kiểm thử phi chức năng bắt đầu từ cấp độ kiểm thử hệ thống."
    },
    "explanation_vi": "Đáp án đúng là D: Thực hiện kiểm thử phi chức năng bắt đầu từ cấp độ kiểm thử hệ thống."
  },
  {
    "id": 147,
    "topic": "Exam A",
    "question": "Consider the following list of activities (I to V): I. Test design II. Test planning III. Review test basis IV. Be a facilitator of a peer review V. Test monitoring and control Which ONE of the following options identifies the activities that the test management role is MAINLY focused on?",
    "options": {
      "A": "Activities III, IV, and V",
      "B": "Activities II and V",
      "C": "Activities I and V",
      "D": "Activities I, III, and IV"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Activities II and V",
    "question_vi": "Hãy xem xét danh sách các hoạt động sau đây (I đến V): I. Thiết kế kiểm thử II. Lập kế hoạch kiểm thử III. Đánh giá cơ sở kiểm tra IV. Là người hỗ trợ đánh giá ngang hàng V. Giám sát và kiểm soát kiểm tra Lựa chọn nào sau đây xác định các hoạt động mà vai trò quản lý kiểm tra CHỦ YẾU tập trung vào?",
    "options_vi": {
      "A": "Hoạt động III, IV và V",
      "B": "Hoạt động II và V",
      "C": "Hoạt động I và V",
      "D": "Hoạt động I, III, IV"
    },
    "explanation_vi": "Câu trả lời đúng là B: Hoạt động II và V"
  },
  {
    "id": 148,
    "topic": "Exam A",
    "question": "Which ONE of the following options CORRECTLY describes one of the seven principles of the testing process?",
    "options": {
      "A": "The objective of testing is to implement exhaustive testing and execute as many test cases as possible.",
      "B": "Exhaustive testing can only be carried out using behavior-based techniques.",
      "C": "It is impossible to test all possible combinations of inputs and preconditions of a system.",
      "D": "Automated testing enables exhaustive testing."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: It is impossible to test all possible combinations of inputs and preconditions of a system.",
    "question_vi": "MỘT trong những lựa chọn sau đây mô tả ĐÚNG một trong bảy nguyên tắc của quá trình thử nghiệm?",
    "options_vi": {
      "A": "Mục tiêu của thử nghiệm là thực hiện thử nghiệm toàn diện và thực hiện càng nhiều trường hợp thử nghiệm càng tốt.",
      "B": "Kiểm tra toàn diện chỉ có thể được thực hiện bằng cách sử dụng các kỹ thuật dựa trên hành vi.",
      "C": "Không thể kiểm tra tất cả các kết hợp đầu vào và điều kiện tiên quyết có thể có của một hệ thống.",
      "D": "Kiểm tra tự động cho phép kiểm tra toàn diện."
    },
    "explanation_vi": "Đáp án đúng là C: Không thể kiểm tra tất cả các kết hợp đầu vào và điều kiện tiên quyết có thể có của một hệ thống."
  },
  {
    "id": 149,
    "topic": "Exam A",
    "question": "Consider the following table, which contains information about test cases from the test management system: Where: • REQ stands for REQuirement • TC stands for Test Case • TC 60 depends on REQ 1 • TC 80 depends on REQ 2 • The priority of the requirement is inherited by the test case • The priority varies from 1 to 5 • Priority 5 is the highest priority Which ONE of the following options organizes the test cases based on the statement coverage strategy, while considering practical constraints?",
    "options": {
      "A": "{TC 20; TC 30; TC 10; TC 40; TC 50; TC 70; TC 60; TC 80; TC 90}",
      "B": "{TC 10; TC 30; TC 20; TC 60; TC 40; TC 80; TC 90; TC 50; TC 70}",
      "C": "{TC 80; TC 70; TC 50; TC 60; TC 20; TC 30; TC 10; TC 40; TC 90}",
      "D": "{TC 60; TC 80; TC 40; TC 90; TC 50; TC 10; TC 70; TC 30; TC 20}"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: {TC 10; TC 30; TC 20; TC 60; TC 40; TC 80; TC 90; TC 50; TC 70}",
    "question_vi": "Hãy xem xét bảng sau, chứa thông tin về các trường hợp kiểm thử từ hệ thống quản lý kiểm thử: Trong đó: • REQ là viết tắt của REQuirement • TC là viết tắt của Test Case • TC 60 phụ thuộc vào REQ 1 • TC 80 phụ thuộc vào REQ 2 • Mức độ ưu tiên của yêu cầu được trường hợp kiểm thử kế thừa • Mức độ ưu tiên thay đổi từ 1 đến 5 • Mức độ ưu tiên 5 là mức ưu tiên cao nhất MỘT trong các tùy chọn sau đây tổ chức các trường hợp kiểm thử dựa trên chiến lược bao phủ câu lệnh, trong khi xem xét các ràng buộc thực tế?",
    "options_vi": {
      "A": "{TC 20; TC 30; TC 10; TC 40; TC 50; TC 70; TC 60; TC 80; TC 90}",
      "B": "{TC 10; TC 30; TC 20; TC 60; TC 40; TC 80; TC 90; TC 50; TC 70}",
      "C": "{TC 80; TC 70; TC 50; TC 60; TC 20; TC 30; TC 10; TC 40; TC 90}",
      "D": "{TC 60; TC 80; TC 40; TC 90; TC 50; TC 10; TC 70; TC 30; TC 20}"
    },
    "explanation_vi": "Câu trả lời đúng là B: {TC 10; TC 30; TC 20; TC 60; TC 40; TC 80; TC 90; TC 50; TC 70}"
  },
  {
    "id": 150,
    "topic": "Exam A",
    "question": "Which ONE of the following work products TYPICALLY belongs to test execution?",
    "options": {
      "A": "Test logs that document the results of test execution.",
      "B": "Automated test scripts used for test execution.",
      "C": "A test plan that describes the test strategy and test objectives.",
      "D": "A list of test conditions prioritized during test analysis."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Test logs that document the results of test execution.",
    "question_vi": "MỘT trong những sản phẩm công việc sau đây ĐẶC ​​BIỆT thuộc về thực hiện kiểm thử?",
    "options_vi": {
      "A": "Nhật ký kiểm tra ghi lại kết quả thực hiện kiểm tra.",
      "B": "Tập lệnh kiểm thử tự động được sử dụng để thực hiện kiểm thử.",
      "C": "Một kế hoạch kiểm thử mô tả chiến lược kiểm thử và mục tiêu kiểm thử.",
      "D": "Danh sách các điều kiện thử nghiệm được ưu tiên trong quá trình phân tích thử nghiệm."
    },
    "explanation_vi": "Đáp án đúng là A: Nhật ký kiểm thử ghi lại kết quả thực hiện kiểm thử."
  },
  {
    "id": 151,
    "topic": "Exam A",
    "question": "Which ONE of the following statements would you expect to be the MOST DIRECT advantage of the whole-team approach?",
    "options": {
      "A": "Capitalizing on the combined skills of business representatives, testers, and developers working together to contribute to project success.",
      "B": "Reducing the involvement of business representatives because of enhanced communication and collaboration between testers and developers.",
      "C": "Avoiding requirements misunderstandings that may not have been detected until dynamic testing when they are more expensive to fix.",
      "D": "Having an automated build and test process, at least once a day, that detects integration errors early and quickly."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Capitalizing on the combined skills of business representatives, testers, and developers working together to contribute to project success.",
    "question_vi": "Bạn cho rằng MỘT trong những tuyên bố sau đây là lợi thế TRỰC TIẾP NHẤT của phương pháp tiếp cận toàn nhóm?",
    "options_vi": {
      "A": "Tận dụng các kỹ năng tổng hợp của đại diện doanh nghiệp, người thử nghiệm và nhà phát triển làm việc cùng nhau để góp phần vào sự thành công của dự án.",
      "B": "Giảm sự tham gia của đại diện doanh nghiệp do tăng cường giao tiếp và cộng tác giữa người thử nghiệm và nhà phát triển.",
      "C": "Tránh những hiểu lầm về yêu cầu có thể không được phát hiện cho đến khi thử nghiệm động khi việc sửa chúng tốn kém hơn.",
      "D": "Có quy trình xây dựng và thử nghiệm tự động, ít nhất một lần mỗi ngày, giúp phát hiện sớm và nhanh chóng các lỗi tích hợp."
    },
    "explanation_vi": "Đáp án đúng là A: Tận dụng các kỹ năng tổng hợp của đại diện doanh nghiệp, người thử nghiệm và nhà phát triển làm việc cùng nhau để góp phần vào sự thành công của dự án."
  },
  {
    "id": 152,
    "topic": "Exam A",
    "question": "Which ONE of the following roles is responsible for mediating, managing time, and generating a safe review environment in which everyone can speak freely?",
    "options": {
      "A": "Manager",
      "B": "Reviewer",
      "C": "Review leader",
      "D": "Moderator"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Moderator",
    "question_vi": "MỘT trong những vai trò sau đây chịu trách nhiệm hòa giải, quản lý thời gian và tạo ra một môi trường đánh giá an toàn, trong đó mọi người có thể tự do phát biểu?",
    "options_vi": {
      "A": "Giám đốc",
      "B": "Người đánh giá",
      "C": "Trưởng nhóm đánh giá",
      "D": "Người điều hành"
    },
    "explanation_vi": "Câu trả lời đúng là D: Moderator"
  },
  {
    "id": 153,
    "topic": "Exam A",
    "question": "Which ONE of the following elements is TYPICALLY used to guide testing during exploratory testing?",
    "options": {
      "A": "A test charter that defines the testing objectives for the test session.",
      "B": "A comprehensive specification that must be fully available before testing begins.",
      "C": "A detailed test script that prescribes all the steps to be performed.",
      "D": "A predefined test case that must be executed exactly as documented."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: A test charter that defines the testing objectives for the test session.",
    "question_vi": "MỘT trong những yếu tố sau đây thường được sử dụng để hướng dẫn thử nghiệm trong quá trình thử nghiệm thăm dò?",
    "options_vi": {
      "A": "Điều lệ kiểm tra xác định mục tiêu kiểm tra cho phiên kiểm tra.",
      "B": "Một đặc tả toàn diện phải có sẵn đầy đủ trước khi bắt đầu thử nghiệm.",
      "C": "Một kịch bản kiểm thử chi tiết mô tả tất cả các bước cần thực hiện.",
      "D": "Một trường hợp thử nghiệm được xác định trước phải được thực thi chính xác như được ghi lại."
    },
    "explanation_vi": "Đáp án đúng là A: Điều lệ kiểm tra xác định mục tiêu kiểm tra cho buổi kiểm tra."
  },
  {
    "id": 154,
    "topic": "Exam A",
    "question": "Which ONE of the following statements BEST applies checklist-based testing?",
    "options": {
      "A": "Checklists should contain general guidelines to ensure that all aspects of the software are covered.",
      "B": "Checklists should contain specific test conditions that can be individually and directly checked.",
      "C": "Checklists should primarily consist of automated test cases to maximize efficiency.",
      "D": "Checklists should be used exclusively for functional testing, as they are unsuitable for non-functional testing."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Checklists should contain specific test conditions that can be individually and directly checked.",
    "question_vi": "MỘT trong những câu sau đây TỐT NHẤT khi áp dụng thử nghiệm dựa trên danh sách kiểm tra?",
    "options_vi": {
      "A": "Danh sách kiểm tra phải chứa các hướng dẫn chung để đảm bảo rằng tất cả các khía cạnh của phần mềm đều được đề cập.",
      "B": "Danh sách kiểm tra phải bao gồm các điều kiện kiểm tra cụ thể có thể được kiểm tra riêng lẻ và trực tiếp.",
      "C": "Danh sách kiểm tra chủ yếu phải bao gồm các trường hợp kiểm tra tự động để tối đa hóa hiệu quả.",
      "D": "Danh sách kiểm tra nên được sử dụng riêng cho thử nghiệm chức năng vì chúng không phù hợp cho thử nghiệm phi chức năng."
    },
    "explanation_vi": "Đáp án đúng là B: Danh sách kiểm tra phải chứa các điều kiện kiểm tra cụ thể có thể được kiểm tra riêng lẻ và trực tiếp."
  },
  {
    "id": 155,
    "topic": "Exam A",
    "question": "Which ONE of the following options corresponds to an activity in the testing process in which testable features are identified?",
    "options": {
      "A": "Test design",
      "B": "Test analysis",
      "C": "Test implementation",
      "D": "Test execution"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Test analysis",
    "question_vi": "MỘT trong những lựa chọn sau đây tương ứng với một hoạt động trong quá trình thử nghiệm trong đó các tính năng có thể kiểm tra được xác định?",
    "options_vi": {
      "A": "Thiết kế thử nghiệm",
      "B": "Phân tích thử nghiệm",
      "C": "Thực hiện thử nghiệm",
      "D": "Thực hiện thử nghiệm"
    },
    "explanation_vi": "Đáp án đúng là B: Phân tích bài kiểm tra"
  },
  {
    "id": 156,
    "topic": "Exam A",
    "question": "Which ONE of the following options MOST ACCURATELY describes branch testing?",
    "options": {
      "A": "In branch testing, the coverage items are executable statements. The aim is to design test cases that exercise statements in the code until an acceptable level of coverage is achieved, expressed as a percentage.",
      "B": "In branch testing, the coverage items are control flow transfers between decisions, and the aim is to design test cases to exercise flow transfers in the code until an acceptable level of coverage is achieved. Coverage is measured as the number of branches exercised by the test cases divided by the total number of branches expressed as a percentage.",
      "C": "In branch testing, the coverage items are branches, and the aim is to design test cases to exercise branches in the code until an acceptable level of coverage is achieved. Coverage is measured as the number of branches exercised by the test cases divided by the total number of branches expressed as a percentage.",
      "D": "In branch testing, the coverage items are executable decisions. The aim is to design test cases that exercise statements in the code until an acceptable level of coverage is achieved. Coverage is expressed as a percentage."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: In branch testing, the coverage items are branches, and the aim is to design test cases to exercise branches in the code until an acceptable level of coverage is achieved. Coverage is measured as the number of branches exercised by the test cases divided by the total number of branches expressed as a percentage.",
    "question_vi": "MỘT trong những tùy chọn sau đây mô tả CHÍNH XÁC NHẤT về thử nghiệm nhánh?",
    "options_vi": {
      "A": "Trong thử nghiệm nhánh, các mục bảo hiểm là các câu lệnh có thể thực thi được. Mục đích là để thiết kế các trường hợp thử nghiệm thực hiện các câu lệnh trong mã cho đến khi đạt được mức độ bao phủ có thể chấp nhận được, được biểu thị bằng phần trăm.",
      "B": "Trong thử nghiệm nhánh, các mục bao phủ là việc chuyển luồng điều khiển giữa các quyết định và mục đích là thiết kế các trường hợp thử nghiệm để thực hiện chuyển luồng trong mã cho đến khi đạt được mức độ bao phủ có thể chấp nhận được. Độ bao phủ được đo bằng số nhánh được thực hiện bởi các trường hợp thử nghiệm chia cho tổng số nhánh được biểu thị bằng phần trăm.",
      "C": "Trong thử nghiệm nhánh, các mục bao phủ là các nhánh và mục đích là thiết kế các trường hợp thử nghiệm để thực hiện các nhánh trong mã cho đến khi đạt được mức độ bao phủ có thể chấp nhận được. Độ bao phủ được đo bằng số nhánh được thực hiện bởi các trường hợp thử nghiệm chia cho tổng số nhánh được biểu thị bằng phần trăm.",
      "D": "Trong thử nghiệm nhánh, các mục bảo hiểm là các quyết định có thể thực thi được. Mục đích là để thiết kế các ca kiểm thử thực hiện các câu lệnh trong mã cho đến khi đạt được mức độ bao phủ có thể chấp nhận được. Mức độ phù hợp được thể hiện dưới dạng phần trăm."
    },
    "explanation_vi": "Giải pháp đúng là C: Trong thử nghiệm nhánh, các mục bao phủ là các nhánh và mục đích là thiết kế các trường hợp thử nghiệm để thực hiện các nhánh trong mã cho đến khi đạt được mức độ bao phủ có thể chấp nhận được. Độ bao phủ được đo bằng số nhánh được thực hiện bởi các trường hợp thử nghiệm chia cho tổng số nhánh được biểu thị bằng phần trăm."
  },
  {
    "id": 157,
    "topic": "Exam A",
    "question": "Which ONE of the following is a GOOD testing practice that is INDEPENDENT of the chosen SDLC (Software Development Life Cycle) model?",
    "options": {
      "A": "Testers are involved in reviewing work products as soon as the final version of this documentation is available so that this earlier testing and defect detection can support the “shift-left” strategy.",
      "B": "Test analysis and design for a specific test level begin during the corresponding development phase of the SDLC, allowing testing to follow the principle of late testing.",
      "C": "For every software development activity, there is a corresponding testing activity, ensuring that all development activities are subject to quality assurance.",
      "D": "Different test levels have specific and overlapping test objectives, allowing tests to be appropriate to specific test object types while managing redundancy."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: For every software development activity, there is a corresponding testing activity, ensuring that all development activities are subject to quality assurance.",
    "question_vi": "MỘT trong những điều sau đây là phương pháp thử nghiệm TỐT, ĐỘC LẬP với mô hình SDLC (Vòng đời phát triển phần mềm) đã chọn?",
    "options_vi": {
      "A": "Người kiểm tra tham gia vào việc xem xét các sản phẩm công việc ngay khi có phiên bản cuối cùng của tài liệu này để việc kiểm tra và phát hiện lỗi trước đó có thể hỗ trợ chiến lược “shift-left”.",
      "B": "Phân tích và thiết kế thử nghiệm cho một cấp độ thử nghiệm cụ thể bắt đầu trong giai đoạn phát triển tương ứng của SDLC, cho phép thử nghiệm tuân theo nguyên tắc thử nghiệm muộn.",
      "C": "Đối với mỗi hoạt động phát triển phần mềm đều có hoạt động kiểm thử tương ứng, đảm bảo mọi hoạt động phát triển đều được đảm bảo chất lượng.",
      "D": "Các cấp độ kiểm thử khác nhau có các mục tiêu kiểm thử cụ thể và chồng chéo, cho phép các kiểm thử phù hợp với các loại đối tượng kiểm thử cụ thể trong khi quản lý sự dư thừa."
    },
    "explanation_vi": "Đáp án đúng là C: Đối với mỗi hoạt động phát triển phần mềm đều có hoạt động kiểm thử tương ứng, đảm bảo mọi hoạt động phát triển đều được đảm bảo chất lượng."
  },
  {
    "id": 158,
    "topic": "Exam A",
    "question": "Which ONE of the following options is NOT a benefit of test automation?",
    "options": {
      "A": "Reduced test execution times",
      "B": "More objective assessment",
      "C": "Prevention of simple human errors",
      "D": "Eliminating completely the need for manual testing"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Eliminating completely the need for manual testing",
    "question_vi": "MỘT trong những lựa chọn sau đây KHÔNG phải là lợi ích của tự động hóa thử nghiệm?",
    "options_vi": {
      "A": "Giảm thời gian thực hiện kiểm tra",
      "B": "Đánh giá khách quan hơn",
      "C": "Ngăn ngừa những lỗi đơn giản của con người",
      "D": "Loại bỏ hoàn toàn nhu cầu kiểm tra thủ công"
    },
    "explanation_vi": "Đáp án đúng là D: Loại bỏ hoàn toàn nhu cầu kiểm thử thủ công"
  },
  {
    "id": 159,
    "topic": "Exam A",
    "question": "Which ONE of the following elements is TYPICALLY NOT part of a test progress report?",
    "options": {
      "A": "Obstacles and their workarounds",
      "B": "A detailed assessment of product quality",
      "C": "Test metrics to show the current status of the test process",
      "D": "New or changed risks"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: A detailed assessment of product quality",
    "question_vi": "MỘT yếu tố nào sau đây KHÔNG PHẢI là một phần của báo cáo tiến độ kiểm thử?",
    "options_vi": {
      "A": "Trở ngại và cách giải quyết",
      "B": "Đánh giá chi tiết về chất lượng sản phẩm",
      "C": "Số liệu kiểm tra để hiển thị trạng thái hiện tại của quá trình kiểm tra",
      "D": "Rủi ro mới hoặc thay đổi"
    },
    "explanation_vi": "Đáp án đúng là B: Đánh giá chi tiết về chất lượng sản phẩm"
  },
  {
    "id": 160,
    "topic": "Exam A",
    "question": "Consider the following statements about acceptance test levels (I to V): Acceptance test levels focus on validating and demonstrating readiness for deployment. II. Acceptance test levels must be performed by an independent test team. III. Acceptance test levels often require specific support, such as test harnesses. IV. Acceptance test levels ideally should be performed by the intended users. V. Acceptance test levels use component specifications as the test basis for the system. Which ONE of the following options contains the statements (I - V) that MOST ACCURATELY characterize acceptance test levels?",
    "options": {
      "A": "Statements I, III, and V",
      "B": "Statements II, IV, and V",
      "C": "Statements II and V",
      "D": "Statements I and IVI. "
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Statements I and IVI. Acceptance test levels focus on validating and demonstrating readiness for deployment. II. Acceptance test levels must be performed by an independent test team. III. Acceptance test levels often require specific support, such as test harnesses. IV. Acceptance test levels ideally should be performed by the intended users. V. Acceptance test levels use component specifications as the test basis for the system. Which ONE of the following options contains the statements (I - V) that MOST ACCURATELY characterize acceptance test levels?",
    "question_vi": "Hãy xem xét các tuyên bố sau đây về mức độ kiểm tra chấp nhận (I đến V): Các cấp độ kiểm tra chấp nhận tập trung vào việc xác nhận và thể hiện sự sẵn sàng triển khai. II. Mức độ kiểm tra chấp nhận phải được thực hiện bởi một nhóm kiểm tra độc lập. III. Các cấp độ kiểm tra chấp nhận thường yêu cầu hỗ trợ cụ thể, chẳng hạn như khai thác kiểm tra. IV. Mức độ kiểm tra chấp nhận lý tưởng nhất nên được thực hiện bởi người dùng dự định. V. Các mức kiểm tra chấp nhận sử dụng các thông số kỹ thuật của thành phần làm cơ sở kiểm tra cho hệ thống. MỘT trong những lựa chọn sau đây có chứa các câu (I - V) mô tả chính xác nhất các cấp độ kiểm tra chấp nhận?",
    "options_vi": {
      "A": "Tuyên bố I, III và V",
      "B": "Tuyên bố II, IV và V",
      "C": "Tuyên bố II và V",
      "D": "Phát biểu I và IVI. "
    },
    "explanation_vi": "Câu trả lời đúng là D: Câu I và IVI."
  },
  {
    "id": 161,
    "topic": "Exam A",
    "question": "Which ONE of the following options BEST characterizes the Behavior-Driven Development (BDD) approach?",
    "options": {
      "A": "Expresses the desired behavior of an application with test cases written in a simple form of natural language that is easy to understand by stakeholders — usually using the Preconditions/Input Values/Process/Output Values/Postconditions format. Test cases are then automatically translated into executable tests.",
      "B": "Expresses the desired behavior of an application with test cases written in a simple form of natural language that is easy to understand by stakeholders — usually using the Given/When/Then format. Test cases are then automatically translated into executable tests.",
      "C": "Derives tests from acceptance criteria as part of the system design process. Tests are written before the part of the application is developed to satisfy the tests. Tests will persist as automated tests to ensure code maintainability in future adaptions/refactoring.",
      "D": "Derives tests from acceptance criteria as part of the system design process. Tests are written before the part of the application is developed to satisfy the tests. Tests may persist as automated tests to ensure the code quality in future adaptions/refactoring."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Expresses the desired behavior of an application with test cases written in a simple form of natural language that is easy to understand by stakeholders — usually using the Given/When/Then format. Test cases are then automatically translated into executable tests.",
    "question_vi": "MỘT trong những lựa chọn sau đây là đặc điểm TỐT NHẤT của phương pháp Phát triển Theo Định hướng Hành vi (BDD)?",
    "options_vi": {
      "A": "Thể hiện hành vi mong muốn của ứng dụng với các trường hợp kiểm thử được viết bằng dạng ngôn ngữ tự nhiên đơn giản, dễ hiểu đối với các bên liên quan - thường sử dụng định dạng Điều kiện tiên quyết/Giá trị đầu vào/Quy trình/Giá trị đầu ra/Điều kiện hậu. Các trường hợp thử nghiệm sau đó được tự động chuyển thành các thử nghiệm có thể thực thi được.",
      "B": "Thể hiện hành vi mong muốn của một ứng dụng với các trường hợp thử nghiệm được viết bằng dạng ngôn ngữ tự nhiên đơn giản, dễ hiểu đối với các bên liên quan - thường sử dụng định dạng Cho trước/Khi/Sau đó. Các trường hợp thử nghiệm sau đó được tự động chuyển thành các thử nghiệm có thể thực thi được.",
      "C": "Xuất phát các bài kiểm tra từ tiêu chí chấp nhận như một phần của quy trình thiết kế hệ thống. Các bài kiểm tra được viết trước khi một phần của ứng dụng được phát triển để đáp ứng các bài kiểm tra. Các thử nghiệm sẽ tiếp tục dưới dạng thử nghiệm tự động để đảm bảo khả năng duy trì mã trong các lần điều chỉnh/tái cấu trúc trong tương lai.",
      "D": "Xuất phát các bài kiểm tra từ tiêu chí chấp nhận như một phần của quy trình thiết kế hệ thống. Các bài kiểm tra được viết trước khi một phần của ứng dụng được phát triển để đáp ứng các bài kiểm tra. Các thử nghiệm có thể tồn tại dưới dạng thử nghiệm tự động để đảm bảo chất lượng mã trong các lần điều chỉnh/tái cấu trúc trong tương lai."
    },
    "explanation_vi": "Đáp án đúng là B: Thể hiện hành vi mong muốn của một ứng dụng với các trường hợp thử nghiệm được viết bằng dạng ngôn ngữ tự nhiên đơn giản, dễ hiểu đối với các bên liên quan - thường sử dụng định dạng Given/When/Then. Các trường hợp thử nghiệm sau đó được tự động chuyển thành các thử nghiệm có thể thực thi được."
  },
  {
    "id": 162,
    "topic": "Exam A",
    "question": "Which ONE of the following elements is TYPICALLY part of the test plan?",
    "options": {
      "A": "The budget and schedule for the test project.",
      "B": "A detailed analysis of the defects found and their causes.",
      "C": "A detailed report on the test results after the test project is completed.",
      "D": "A list of test logs from the test execution."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: The budget and schedule for the test project.",
    "question_vi": "MỘT trong những yếu tố sau đây ĐẶC ​​BIỆT là một phần của kế hoạch kiểm tra?",
    "options_vi": {
      "A": "Ngân sách và tiến độ cho dự án thử nghiệm.",
      "B": "Một phân tích chi tiết về các khiếm khuyết được tìm thấy và nguyên nhân của chúng.",
      "C": "Báo cáo chi tiết về kết quả test sau khi dự án test hoàn thành.",
      "D": "Danh sách nhật ký kiểm tra từ quá trình thực hiện kiểm tra."
    },
    "explanation_vi": "Đáp án đúng là A: Ngân sách và tiến độ cho dự án thử nghiệm."
  },
  {
    "id": 163,
    "topic": "Exam A",
    "question": "Which ONE of the following options identifies the perspectives through which a collective authorship process generates a shared vision of user stories?",
    "options": {
      "A": "Product owner, development, and testing",
      "B": "Business, architecture, and testing",
      "C": "Business, development, and testing",
      "D": "Business, development, and acceptance testing"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Business, development, and testing",
    "question_vi": "MỘT trong những lựa chọn sau đây xác định các quan điểm mà qua đó quy trình quyền tác giả tập thể tạo ra tầm nhìn chung về câu chuyện của người dùng?",
    "options_vi": {
      "A": "Chủ sở hữu sản phẩm, phát triển và thử nghiệm",
      "B": "Kinh doanh, kiến ​​trúc và thử nghiệm",
      "C": "Kinh doanh, phát triển và thử nghiệm",
      "D": "Thử nghiệm kinh doanh, phát triển và chấp nhận"
    },
    "explanation_vi": "Đáp án đúng là C: Business, Development, and testing"
  },
  {
    "id": 164,
    "topic": "Exam A",
    "question": "Which ONE of the following options BEST describes the third test quadrant (3)?",
    "options": {
      "A": "This test quadrant contains smoke tests and non-functional tests (except usability tests). These tests are often automated.",
      "B": "This test quadrant is business-facing and criticizes the system. It contains exploratory testing, usability testing, and user acceptance testing.",
      "C": "This test quadrant contains functional tests, examples, user story tests, user experience prototypes, API testing, and simulations. These tests check the acceptance criteria and can be manual or automated.",
      "D": "This test quadrant is technology-facing and supports the team. These tests should be automated and included in the continuous integration (CI) process."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: This test quadrant is business-facing and criticizes the system. It contains exploratory testing, usability testing, and user acceptance testing.",
    "question_vi": "MỘT trong những lựa chọn sau đây mô tả TỐT NHẤT góc phần tư thử nghiệm thứ ba (3)?",
    "options_vi": {
      "A": "Góc phần tư kiểm tra này bao gồm kiểm tra khói và kiểm tra phi chức năng (ngoại trừ kiểm tra khả năng sử dụng). Những thử nghiệm này thường được tự động hóa.",
      "B": "Góc phần tư thử nghiệm này hướng tới hoạt động kinh doanh và chỉ trích hệ thống. Nó bao gồm thử nghiệm thăm dò, thử nghiệm khả năng sử dụng và thử nghiệm chấp nhận của người dùng.",
      "C": "Góc phần tư thử nghiệm này chứa các thử nghiệm chức năng, ví dụ, thử nghiệm câu chuyện của người dùng, nguyên mẫu trải nghiệm người dùng, thử nghiệm API và mô phỏng. Các thử nghiệm này kiểm tra các tiêu chí chấp nhận và có thể được thực hiện thủ công hoặc tự động.",
      "D": "Góc phần tư thử nghiệm này hướng tới công nghệ và hỗ trợ nhóm. Các thử nghiệm này phải được tự động hóa và đưa vào quy trình tích hợp liên tục (CI)."
    },
    "explanation_vi": "Đáp án đúng là B: Góc phần tư bài kiểm tra này hướng tới doanh nghiệp và chỉ trích hệ thống. Nó bao gồm thử nghiệm thăm dò, thử nghiệm khả năng sử dụng và thử nghiệm chấp nhận của người dùng."
  },
  {
    "id": 165,
    "topic": "Exam A",
    "question": "Which ONE of the following options BEST describes black-box test techniques?",
    "options": {
      "A": "Black-Box testing techniques are based on experience with the test object without knowing the internal structure.",
      "B": "In Black-Box testing techniques, test cases are created based on the software's implementation.",
      "C": "Black-box testing techniques are based on analyzing the test object's specified and implied behavior without knowledge of its internal data structure.",
      "D": "Black-box testing techniques involve analyzing the specified behavior of the test object without knowledge of its internal structure."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Black-box testing techniques involve analyzing the specified behavior of the test object without knowledge of its internal structure.",
    "question_vi": "MỘT trong những lựa chọn sau đây mô tả TỐT NHẤT các kỹ thuật kiểm thử hộp đen?",
    "options_vi": {
      "A": "Kỹ thuật kiểm thử hộp đen dựa trên kinh nghiệm với đối tượng kiểm thử mà không biết cấu trúc bên trong.",
      "B": "Trong kỹ thuật kiểm thử hộp đen, các trường hợp kiểm thử được tạo ra dựa trên việc triển khai phần mềm.",
      "C": "Các kỹ thuật kiểm thử hộp đen dựa trên việc phân tích hành vi được chỉ định và ngụ ý của đối tượng kiểm thử mà không cần biết về cấu trúc dữ liệu bên trong của nó.",
      "D": "Kỹ thuật kiểm thử hộp đen liên quan đến việc phân tích hành vi cụ thể của đối tượng kiểm thử mà không cần biết về cấu trúc bên trong của nó."
    },
    "explanation_vi": "Đáp án đúng là D: Kỹ thuật kiểm tra hộp đen liên quan đến việc phân tích hành vi cụ thể của đối tượng kiểm tra mà không biết về cấu trúc bên trong của nó."
  },
  {
    "id": 166,
    "topic": "Exam A",
    "question": "Which of the following is a typical test objective?",
    "options": {
      "A": "To fix defects efficiently and effectively",
      "B": "To ensure the software is free of defects",
      "C": "To verify that the software meets specified requirements",
      "D": "To confirm that all possible input combinations have been tested"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: To verify that the software meets specified requirements",
    "question_vi": "Điều nào sau đây là mục tiêu thử nghiệm điển hình?",
    "options_vi": {
      "A": "Để khắc phục lỗi một cách hiệu quả và hiệu quả",
      "B": "Để đảm bảo phần mềm không có lỗi",
      "C": "Để xác minh rằng phần mềm đáp ứng các yêu cầu cụ thể",
      "D": "Để xác nhận rằng tất cả các kết hợp đầu vào có thể đã được thử nghiệm"
    },
    "explanation_vi": "Đáp án đúng là C: Để xác minh phần mềm đáp ứng yêu cầu quy định"
  },
  {
    "id": 167,
    "topic": "Exam A",
    "question": "Consider two situations: (1) A code statement is “return x*y + z”, but should be “return x*(y+z)” (2) For the input x=2, y=3, z=4 the system returns 10, but should return 14 Which of the following is TRUE?",
    "options": {
      "A": "Both (1) and (2) are defects",
      "B": "(1) is an error, (2) is a failure",
      "C": "(1) is a defect, (2) is a failure",
      "D": "Both (1) and (2) are errors"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: (1) is a defect, (2) is a failure",
    "question_vi": "Hãy xem xét hai tình huống: (1) Một câu lệnh mã là “return x*y + z”, nhưng phải là “return x*(y+z)” (2) Đối với đầu vào x=2, y=3, z=4, hệ thống trả về 10, nhưng phải trả về 14 Điều nào sau đây là ĐÚNG?",
    "options_vi": {
      "A": "Cả (1) và (2) đều là khuyết tật",
      "B": "(1) là lỗi, (2) là lỗi",
      "C": "(1) là khiếm khuyết, (2) là thất bại",
      "D": "Cả (1) và (2) đều sai"
    },
    "explanation_vi": "Câu trả lời đúng là C: (1) là khiếm khuyết, (2) là thất bại"
  },
  {
    "id": 168,
    "topic": "Exam A",
    "question": "The Pareto principle states that a few causes are responsible for most effects. Which test principle illustrates this phenomenon?",
    "options": {
      "A": "Exhaustive testing is impossible",
      "B": "Tests wear out",
      "C": "Defects cluster together",
      "D": "Early testing saves time and money"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Defects cluster together",
    "question_vi": "Nguyên lý Pareto nói rằng một vài nguyên nhân gây ra hầu hết các kết quả. Nguyên tắc kiểm tra nào minh họa cho hiện tượng này?",
    "options_vi": {
      "A": "Kiểm tra toàn diện là không thể",
      "B": "Các bài kiểm tra bị hao mòn",
      "C": "Các khuyết tật cụm lại với nhau",
      "D": "Thử nghiệm sớm giúp tiết kiệm thời gian và tiền bạc"
    },
    "explanation_vi": "Câu trả lời đúng là C: Các lỗi cụm lại với nhau"
  },
  {
    "id": 169,
    "topic": "Exam A",
    "question": "Match test activities (1)-(4) with related tasks (P)-(S): (1) Test analysis (2) Test completion (3) Test implementation (4) Test execution (P) Defining test conditions (Q) Reporting defects (R) Creating change requests for unresolved defects (5) Creating test cases",
    "options": {
      "A": "1P, 2R, 3S, 4Q",
      "B": "1S, 2R, 3P, 4Q",
      "C": "1S, 2Q, 3P, 4R",
      "D": "1P, 2Q, 3S, 4R"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: 1P, 2R, 3S, 4Q",
    "question_vi": "Ghép các hoạt động kiểm thử (1)-(4) với các nhiệm vụ liên quan (P)-(S): (1) Phân tích kiểm thử (2) Hoàn thành kiểm thử (3) Thực hiện kiểm thử (4) Thực hiện kiểm thử (P) Xác định điều kiện kiểm thử (Q) Báo cáo lỗi (R) Tạo yêu cầu thay đổi cho các lỗi chưa được giải quyết (5) Tạo trường hợp kiểm thử",
    "options_vi": {
      "A": "1P, 2R, 3S, 4Q",
      "B": "1S, 2R, 3P, 4Q",
      "C": "1S, 2Q, 3P, 4R",
      "D": "1P, 2Q, 3S, 4R"
    },
    "explanation_vi": "Đáp án đúng là A: 1P, 2R, 3S, 4Q"
  },
  {
    "id": 170,
    "topic": "Exam A",
    "question": "Which of the following is a testware created during test analysis?",
    "options": {
      "A": "“Steps: 1) enter valid username; 2) enter a correct password; 3) click “Login”; expected result: the user is logged”",
      "B": "“Check that the user can successfully log in to the application with valid credentials”",
      "C": "“Number of test cases run: 55; number of test cases passed: 35; number of test cases failed: 20”",
      "D": "“When a user enters valid credentials and clicks the “Login” button, no action occurs, and the user remains on the login page”"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: “Check that the user can successfully log in to the application with valid credentials”",
    "question_vi": "Phần mềm nào sau đây là phần mềm kiểm thử được tạo trong quá trình phân tích kiểm thử?",
    "options_vi": {
      "A": "“Các bước: 1) nhập tên người dùng hợp lệ; 2) nhập đúng mật khẩu; 3) nhấp vào “Đăng nhập”; kết quả mong đợi: người dùng đã đăng nhập”",
      "B": "“Kiểm tra xem người dùng có thể đăng nhập thành công vào ứng dụng bằng thông tin xác thực hợp lệ hay không”",
      "C": "“Số ca kiểm thử đã chạy: 55; số ca kiểm thử đạt: 35; số ca kiểm thử thất bại: 20”",
      "D": "“Khi người dùng nhập thông tin xác thực hợp lệ và nhấp vào nút “Đăng nhập”, không có hành động nào xảy ra và người dùng vẫn ở lại trang đăng nhập”"
    },
    "explanation_vi": "Đáp án đúng là B: “Kiểm tra xem người dùng có thể đăng nhập thành công vào ứng dụng bằng thông tin xác thực hợp lệ hay không”"
  },
  {
    "id": 171,
    "topic": "Exam A",
    "question": "How can a tester use traceability?",
    "options": {
      "A": "To calculate requirements coverage after test execution",
      "B": "To derive test data that meet the specified coverage criteria",
      "C": "To analyze the test execution log to detect possible root causes",
      "D": "To ensure consistency and control across IT environments"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: To calculate requirements coverage after test execution",
    "question_vi": "Người thử nghiệm có thể sử dụng khả năng truy xuất nguồn gốc như thế nào?",
    "options_vi": {
      "A": "Để tính toán phạm vi yêu cầu sau khi thực hiện kiểm thử",
      "B": "Để lấy được dữ liệu thử nghiệm đáp ứng các tiêu chí bao phủ được chỉ định",
      "C": "Để phân tích nhật ký thực hiện kiểm tra nhằm phát hiện các nguyên nhân gốc rễ có thể xảy ra",
      "D": "Để đảm bảo tính nhất quán và kiểm soát trên các môi trường CNTT"
    },
    "explanation_vi": "Đáp án đúng là A: Để tính toán phạm vi yêu cầu sau khi thực hiện kiểm thử"
  },
  {
    "id": 172,
    "topic": "Exam A",
    "question": "Which approach BEST improves team dynamics, enhances communication, and creates synergy by allowing the various skill sets within the team to be leveraged for the benefit of the project?",
    "options": {
      "A": "Collaboration-based test approach",
      "B": "Whole team approach",
      "C": "Exploratory testing",
      "D": "Test-first approach"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Whole team approach",
    "question_vi": "Cách tiếp cận nào TỐT NHẤT giúp cải thiện tính năng động của nhóm, tăng cường giao tiếp và tạo ra sức mạnh tổng hợp bằng cách cho phép các bộ kỹ năng khác nhau trong nhóm được tận dụng vì lợi ích của dự án?",
    "options_vi": {
      "A": "Phương pháp thử nghiệm dựa trên cộng tác",
      "B": "Cách tiếp cận toàn đội",
      "C": "Thử nghiệm thăm dò",
      "D": "Phương pháp thử nghiệm đầu tiên"
    },
    "explanation_vi": "Đáp án đúng là B: Cách tiếp cận của cả nhóm"
  },
  {
    "id": 173,
    "topic": "Exam A",
    "question": "A developer assumed users would always filter items by category to narrow their search. However, a tester conducted usability testing and found that most users prefer using the search bar instead, highlighting a potential gap in the user interface design. Which practice allowed the benefit described in the scenario to be achieved?",
    "options": {
      "A": "Shift left",
      "B": "Independence of testing",
      "C": "Confirmation testing",
      "D": "Retrospectives"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Shift left",
    "question_vi": "Một nhà phát triển cho rằng người dùng sẽ luôn lọc các mục theo danh mục để thu hẹp phạm vi tìm kiếm của họ. Tuy nhiên, một người thử nghiệm đã tiến hành kiểm tra khả năng sử dụng và nhận thấy rằng hầu hết người dùng thích sử dụng thanh tìm kiếm hơn, điều này nêu bật một lỗ hổng tiềm ẩn trong thiết kế giao diện người dùng. Cách thực hành nào cho phép đạt được lợi ích được mô tả trong tình huống?",
    "options_vi": {
      "A": "Chuyển sang trái",
      "B": "Độc lập của thử nghiệm",
      "C": "Kiểm tra xác nhận",
      "D": "Hồi tưởng"
    },
    "explanation_vi": "Câu trả lời đúng là A: Shift left"
  },
  {
    "id": 174,
    "topic": "Exam A",
    "question": "Which practice should be applied to ALL software development lifecycles?",
    "options": {
      "A": "Test activities should be planned for each iteration separately",
      "B": "Test design for a given test level should begin just after the implementation is done",
      "C": "All test levels should have the same specific test objectives",
      "D": "Each development activity should have a corresponding test activity"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Each development activity should have a corresponding test activity",
    "question_vi": "Thực tiễn nào nên được áp dụng cho TẤT CẢ vòng đời phát triển phần mềm?",
    "options_vi": {
      "A": "Hoạt động kiểm thử nên được lên kế hoạch cho từng lần lặp riêng biệt",
      "B": "Thiết kế thử nghiệm cho một cấp độ thử nghiệm nhất định nên bắt đầu ngay sau khi thực hiện xong",
      "C": "Tất cả các cấp độ kiểm tra phải có cùng mục tiêu kiểm tra cụ thể",
      "D": "Mỗi hoạt động phát triển nên có một hoạt động thử nghiệm tương ứng"
    },
    "explanation_vi": "Đáp án đúng là D: Mỗi hoạt động phát triển nên có một hoạt động kiểm tra tương ứng"
  },
  {
    "id": 175,
    "topic": "Exam A",
    "question": "Which of the following is NOT an example of a test-first approach to development?",
    "options": {
      "A": "Acceptance Test-Driven Development",
      "B": "Test Coverage-Driven Development",
      "C": "Behavior-Driven Development",
      "D": "Test-Driven Development"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Test Coverage-Driven Development",
    "question_vi": "Điều nào sau đây KHÔNG phải là ví dụ về phương pháp phát triển thử nghiệm đầu tiên?",
    "options_vi": {
      "A": "Phát triển dựa trên thử nghiệm chấp nhận",
      "B": "Kiểm tra phát triển dựa trên phạm vi bảo hiểm",
      "C": "Phát triển theo hướng hành vi",
      "D": "Phát triển dựa trên thử nghiệm"
    },
    "explanation_vi": "Câu trả lời đúng là B: Phát triển theo hướng bao phủ thử nghiệm"
  },
  {
    "id": 176,
    "topic": "Exam A",
    "question": "Which of the following is an example of a shift left?",
    "options": {
      "A": "Performing non-functional testing using functional test cases",
      "B": "Monitoring system performance after the release",
      "C": "Using Acceptance Test-Driven Development",
      "D": "Participating in retrospectives"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Using Acceptance Test-Driven Development",
    "question_vi": "Ví dụ nào sau đây là ví dụ về sự dịch chuyển sang trái?",
    "options_vi": {
      "A": "Thực hiện kiểm thử phi chức năng bằng cách sử dụng các trường hợp kiểm thử chức năng",
      "B": "Giám sát hiệu suất hệ thống sau khi phát hành",
      "C": "Sử dụng phát triển dựa trên thử nghiệm chấp nhận",
      "D": "Tham gia hồi tưởng"
    },
    "explanation_vi": "Câu trả lời đúng là C: Sử dụng phát triển dựa trên thử nghiệm chấp nhận"
  },
  {
    "id": 177,
    "topic": "Exam A",
    "question": "Which of the following is an example of how retrospectives can be used for process improvement?",
    "options": {
      "A": "Retrospectives lead to increased project budget",
      "B": "Retrospectives allow for a quick resolution of technical debt",
      "C": "Retrospectives improve the quality of the test basis",
      "D": "Retrospectives facilitate discussions about new product features"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Retrospectives improve the quality of the test basis",
    "question_vi": "Điều nào sau đây là ví dụ về cách sử dụng hồi cứu để cải tiến quy trình?",
    "options_vi": {
      "A": "Hồi tưởng dẫn đến tăng ngân sách dự án",
      "B": "Việc xem xét lại cho phép giải quyết nhanh chóng nợ kỹ thuật",
      "C": "Hồi cứu cải thiện chất lượng của cơ sở thử nghiệm",
      "D": "Hồi tưởng tạo điều kiện thuận lợi cho các cuộc thảo luận về các tính năng của sản phẩm mới"
    },
    "explanation_vi": "Đáp án đúng là C: Hồi tưởng nâng cao chất lượng của bài kiểm tra"
  },
  {
    "id": 178,
    "topic": "Exam A",
    "question": "What is the difference between confirmation testing and regression testing?",
    "options": {
      "A": "Confirmation testing verifies that specific defects have been fixed, while regression testing ensures that recent changes have not introduced new defects in existing functionality.",
      "B": "Confirmation testing is performed by developers as unit or unit integration testing, while regression testing is performed by testers as system integration, system, or acceptance testing.",
      "C": "There is no difference. These two terms are synonymous.",
      "D": "Confirmation testing verifies that the test object works correctly under expected conditions, while regression testing verifies the system's robustness with unexpected or incorrect data."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Confirmation testing verifies that specific defects have been fixed, while regression testing ensures that recent changes have not introduced new defects in existing functionality.",
    "question_vi": "Sự khác biệt giữa kiểm tra xác nhận và kiểm tra hồi quy là gì?",
    "options_vi": {
      "A": "Kiểm tra xác nhận xác minh rằng các lỗi cụ thể đã được sửa, trong khi kiểm tra hồi quy đảm bảo rằng những thay đổi gần đây không tạo ra các lỗi mới trong chức năng hiện có.",
      "B": "Thử nghiệm xác nhận được thực hiện bởi các nhà phát triển dưới dạng thử nghiệm tích hợp đơn vị hoặc đơn vị, trong khi thử nghiệm hồi quy được thực hiện bởi người thử nghiệm dưới dạng thử nghiệm tích hợp hệ thống, hệ thống hoặc chấp nhận.",
      "C": "Không có sự khác biệt. Hai thuật ngữ này đồng nghĩa.",
      "D": "Kiểm tra xác nhận xác minh rằng đối tượng kiểm tra hoạt động chính xác trong các điều kiện mong đợi, trong khi kiểm tra hồi quy xác minh độ mạnh mẽ của hệ thống với dữ liệu không mong muốn hoặc không chính xác."
    },
    "explanation_vi": "Đáp án đúng là A: Kiểm tra xác nhận xác minh rằng các lỗi cụ thể đã được sửa chữa, trong khi kiểm tra hồi quy đảm bảo rằng những thay đổi gần đây không tạo ra các lỗi mới trong chức năng hiện có."
  },
  {
    "id": 179,
    "topic": "Exam A",
    "question": "What kind of work products can be examined by reviews?",
    "options": {
      "A": "Only work products with a structure against which they can be checked by a tool",
      "B": "Only work products that can be read and understood",
      "C": "Only work products that are difficult to interpret by humans",
      "D": "Only non-executable work products"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Only work products that can be read and understood",
    "question_vi": "Những loại sản phẩm công việc nào có thể được kiểm tra bằng cách đánh giá?",
    "options_vi": {
      "A": "Chỉ gia công các sản phẩm có cấu trúc mà chúng có thể được kiểm tra bằng công cụ",
      "B": "Chỉ những sản phẩm hoạt động có thể đọc và hiểu được",
      "C": "Chỉ những sản phẩm hoạt động mà con người khó diễn giải",
      "D": "Chỉ các sản phẩm công việc không thể thực thi được"
    },
    "explanation_vi": "Đáp án đúng là B: Chỉ những sản phẩm công việc có thể đọc và hiểu được"
  },
  {
    "id": 180,
    "topic": "Exam A",
    "question": "Which of the following statements about static and dynamic testing is TRUE?",
    "options": {
      "A": "Static testing can detect that a component has too many lines of code; dynamic testing can force a component to return the wrong result",
      "B": "Static testing can force a component to return the wrong result; dynamic testing can force a component to return the correct result",
      "C": "Static testing can demonstrate that software fails when given specific input data; dynamic testing finds defects directly",
      "D": "Static testing can be performed at all test levels; dynamic testing can be performed only at system, system integration, and acceptance test levels"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Static testing can detect that a component has too many lines of code; dynamic testing can force a component to return the wrong result",
    "question_vi": "Câu nào sau đây về thử nghiệm tĩnh và động là ĐÚNG?",
    "options_vi": {
      "A": "Kiểm thử tĩnh có thể phát hiện một thành phần có quá nhiều dòng mã; Kiểm tra động có thể buộc một thành phần trả về kết quả sai",
      "B": "Kiểm tra tĩnh có thể buộc một thành phần trả về kết quả sai; Kiểm tra động có thể buộc một thành phần trả về kết quả chính xác",
      "C": "Kiểm tra tĩnh có thể chứng minh rằng phần mềm bị lỗi khi được cung cấp dữ liệu đầu vào cụ thể; Kiểm thử động tìm ra lỗi trực tiếp",
      "D": "Kiểm thử tĩnh có thể được thực hiện ở mọi cấp độ kiểm thử; Kiểm tra động chỉ có thể được thực hiện ở cấp độ hệ thống, tích hợp hệ thống và kiểm tra chấp nhận"
    },
    "explanation_vi": "Đáp án đúng là A: Kiểm thử tĩnh có thể phát hiện một thành phần có quá nhiều dòng mã; Kiểm tra động có thể buộc một thành phần trả về kết quả sai"
  },
  {
    "id": 181,
    "topic": "Exam A",
    "question": "Which role is responsible for ensuring the effective running of review meetings?",
    "options": {
      "A": "Review leader",
      "B": "Facilitator",
      "C": "Scribe",
      "D": "Manager"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Review leader",
    "question_vi": "Vai trò nào chịu trách nhiệm đảm bảo các cuộc họp đánh giá diễn ra hiệu quả?",
    "options_vi": {
      "A": "Trưởng nhóm đánh giá",
      "B": "Người hướng dẫn",
      "C": "người ghi chép",
      "D": "Giám đốc"
    },
    "explanation_vi": "Đáp án đúng là A: Trưởng nhóm xét duyệt"
  },
  {
    "id": 182,
    "topic": "Exam A",
    "question": "The development team is finalizing the design of a database schema for a banking application. Before implementation, architects want to get a consensus among team members on the details of this scheme. Which type of review fits this scenario BEST?",
    "options": {
      "A": "Informal review",
      "B": "Technical review",
      "C": "Inspection",
      "D": "Static analysis"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Technical review",
    "question_vi": "Nhóm phát triển đang hoàn thiện thiết kế lược đồ cơ sở dữ liệu cho ứng dụng ngân hàng. Trước khi thực hiện, các kiến ​​trúc sư muốn có được sự đồng thuận giữa các thành viên trong nhóm về các chi tiết của sơ đồ này. Loại đánh giá nào phù hợp với kịch bản này TỐT NHẤT?",
    "options_vi": {
      "A": "Đánh giá không chính thức",
      "B": "Đánh giá kỹ thuật",
      "C": "Điều tra",
      "D": "Phân tích tĩnh"
    },
    "explanation_vi": "Đáp án đúng là B: Đánh giá kỹ thuật"
  },
  {
    "id": 183,
    "topic": "Exam A",
    "question": "Consider the following characteristics of test techniques. (i) They are based on an analysis of the software model (ii) They are based on an analysis of the test object's internal structure (iii) The derived test cases are independent of how software is implemented (iv) It is difficult to define precise coverage measures for these techniques (v) Their effectiveness depends heavily on the tester’s skills and creativity Which of them describe black-box, white-box, and experience-based test techniques?",
    "options": {
      "A": "(iii), (v) - black-box; (ii), (iv) - white-box; (i) - experience-based",
      "B": "(ii), (iv) - black-box; (i), (v) - white-box; (iii) - experience-based",
      "C": "(i) - black-box; (ii), (iii) - white-box; (iv), (v) - experience-based",
      "D": "(i), (iii) - black-box; (ii) - white-box; (iv), (v) - experience-based"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: (i), (iii) - black-box; (ii) - white-box; (iv), (v) - experience-based",
    "question_vi": "Hãy xem xét các đặc điểm sau đây của kỹ thuật kiểm tra. (i) Chúng dựa trên phân tích mô hình phần mềm (ii) Chúng dựa trên phân tích cấu trúc bên trong của đối tượng kiểm thử (iii) Các trường hợp kiểm thử dẫn xuất độc lập với cách triển khai phần mềm (iv) Khó xác định các biện pháp bao phủ chính xác cho các kỹ thuật này (v) Hiệu quả của chúng phụ thuộc rất nhiều vào kỹ năng và tính sáng tạo của người kiểm thử. Cái nào trong số chúng mô tả các kỹ thuật kiểm thử hộp đen, hộp trắng và dựa trên kinh nghiệm?",
    "options_vi": {
      "A": "(iii), (v) - hộp đen; (ii), (iv) - hộp trắng; (i) - dựa trên kinh nghiệm",
      "B": "(ii), (iv) - hộp đen; (i), (v) - hộp trắng; (iii) - dựa trên kinh nghiệm",
      "C": "(i) - hộp đen; (ii), (iii) - hộp trắng; (iv), (v) - dựa trên kinh nghiệm",
      "D": "(i), (iii) - hộp đen; (ii) - hộp trắng; (iv), (v) - dựa trên kinh nghiệm"
    },
    "explanation_vi": "Câu trả lời đúng là D: (i), (iii) - black-box; (ii) - hộp trắng; (iv), (v) - dựa trên kinh nghiệm"
  },
  {
    "id": 184,
    "topic": "Exam A",
    "question": "You validate the correctness of price calculation in a food ordering application. The input parameter is the order amount (in $), and the result is the final price reflecting the discount. If the order amount is less than $100, the discount is not granted (0% discount). If the order amount is greater than $500, a 50% discount is granted. In other cases, the 10% discount is granted. You apply equivalence partitioning for the “order amount” domain to check if discounts are granted correctly. Which test data set achieves the highest coverage?",
    "options": {
      "A": "100.01, 499.99, 500.01",
      "B": "50.99, 500, 500.10",
      "C": "99.99, 100, 500",
      "D": "0, 10, 50"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: 50.99, 500, 500.10",
    "question_vi": "Bạn xác nhận tính chính xác của việc tính giá trong ứng dụng đặt món ăn. Tham số đầu vào là số tiền đặt hàng (tính bằng $) và kết quả là giá cuối cùng phản ánh mức chiết khấu. Nếu số tiền đặt hàng dưới 100 USD thì không được giảm giá (giảm giá 0%). Nếu số tiền đặt hàng lớn hơn $500, sẽ được giảm giá 50%. Trong các trường hợp khác, giảm giá 10% được cấp. Bạn áp dụng phân vùng tương đương cho miền “số lượng đặt hàng” để kiểm tra xem mức giảm giá có được cấp chính xác hay không. Tập dữ liệu thử nghiệm nào đạt được mức độ bao phủ cao nhất?",
    "options_vi": {
      "A": "100,01, 499,99, 500,01",
      "B": "50,99, 500, 500,10",
      "C": "99,99, 100, 500",
      "D": "0, 10, 50"
    },
    "explanation_vi": "Đáp án đúng là B: 50,99, 500, 500,10"
  },
  {
    "id": 185,
    "topic": "Exam A",
    "question": "The temperature controller receives the temperature in full degrees Celsius (°C) as input. For 0 degrees, it returns the message ‘zero temperature’. For positive temperatures, it returns the message ‘positive temperature’. For negative temperatures, it returns the message ‘negative temperature’. You use a 3-value boundary value analysis to test the controller's behavior. Which test data set achieves the HIGHEST coverage?",
    "options": {
      "A": "-1°С, 0°С, 1°С, 3°C",
      "B": "0°С, 1°С, 2°С, 3°С",
      "C": "-2°С, -1 °С, 1°С, 2°С",
      "D": "-3°С, 0°С, 1°С, 2°С"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: -1°С, 0°С, 1°С, 3°C",
    "question_vi": "Bộ điều khiển nhiệt độ nhận nhiệt độ đầy đủ độ C (° C) làm đầu vào. Đối với 0 độ, nó trả về thông báo ‘nhiệt độ bằng 0’. Đối với nhiệt độ dương, nó trả về thông báo ‘nhiệt độ dương’. Đối với nhiệt độ âm, nó trả về thông báo ‘nhiệt độ âm’. Bạn sử dụng phân tích giá trị biên 3 giá trị để kiểm tra hành vi của bộ điều khiển. Tập dữ liệu thử nghiệm nào đạt được mức độ bao phủ CAO NHẤT?",
    "options_vi": {
      "A": "-1°С, 0°С, 1°С, 3°C",
      "B": "0°С, 1°С, 2°С, 3°С",
      "C": "-2°С, -1°С, 1°С, 2°С",
      "D": "-3°С, 0°С, 1°С, 2°С"
    },
    "explanation_vi": "Đáp án đúng là A: -1°С, 0°С, 1°С, 3°C"
  },
  {
    "id": 186,
    "topic": "Exam A",
    "question": "You test a system that grants a driving license. You design test cases based on the following minimized decision table. You have already designed three following test cases: • 18 years old, passed both vision and driving tests; expected result: grant a license • 17 years old, passed vision test, failed driving test; expected result: do not grant a license • 19 years old, failed both vision and driving tests; expected result: do not grant a license Which test case needs to be added to this set to achieve full decision table coverage?",
    "options": {
      "A": "No test case is needed; the existing test cases already achieve the required coverage",
      "B": "17 years old, passed both vision and driving test; expected result: grant a license",
      "C": "18 years old, passed vision test, failed driving test; expected result: do not grant a license",
      "D": "20 years old failed vision test passed driving test-expected result: do not grant a license"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: 18 years old, passed vision test, failed driving test; expected result: do not grant a license",
    "question_vi": "Bạn kiểm tra một hệ thống cấp giấy phép lái xe. Bạn thiết kế các trường hợp kiểm thử dựa trên bảng quyết định thu nhỏ sau đây. Bạn đã thiết kế ba trường hợp kiểm tra sau: • 18 tuổi, đậu cả hai bài kiểm tra thị lực và lái xe; kết quả mong đợi: được cấp bằng lái xe • 17 tuổi, đậu bài kiểm tra thị lực, trượt bài thi lái xe; kết quả mong đợi: không cấp bằng lái xe • 19 tuổi, trượt cả hai bài kiểm tra thị lực và lái xe; kết quả mong đợi: không cấp giấy phép Trường hợp thử nghiệm nào cần được thêm vào bộ này để đạt được phạm vi bao phủ toàn bộ bảng quyết định?",
    "options_vi": {
      "A": "Không cần trường hợp thử nghiệm nào; các trường hợp thử nghiệm hiện tại đã đạt được mức độ bao phủ cần thiết",
      "B": "17 tuổi, thi đỗ cả thị lực và lái xe; kết quả mong đợi: cấp giấy phép",
      "C": "18 tuổi, đậu bài kiểm tra thị lực, trượt bài thi lái xe; kết quả mong đợi: không cấp giấy phép",
      "D": "20 tuổi trượt bài kiểm tra thị lực, đỗ kỳ thi lái xe - kết quả mong đợi: không được cấp bằng lái"
    },
    "explanation_vi": "Đáp án đúng là C: 18 tuổi, đậu bài kiểm tra thị lực, trượt bài kiểm tra lái xe; kết quả mong đợi: không cấp giấy phép"
  },
  {
    "id": 187,
    "topic": "Exam A",
    "question": "You work on a project where the executed test set achieved 100% statement coverage. What is the consequence of this fact?",
    "options": {
      "A": "Each executable statement with a defect had to be exercised at least once",
      "B": "The test set triggered no failures in the tested code",
      "C": "All requirements related to the code under test are met",
      "D": "Each decision outcome in the code had to be evaluated both for true and false"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Each executable statement with a defect had to be exercised at least once",
    "question_vi": "Bạn làm việc trong một dự án trong đó tập kiểm thử đã thực thi đạt mức độ bao phủ câu lệnh 100%. Hậu quả của thực tế này là gì?",
    "options_vi": {
      "A": "Mỗi câu lệnh thực thi có lỗi phải được thực hiện ít nhất một lần",
      "B": "Bộ kiểm tra không gây ra lỗi nào trong mã được kiểm tra",
      "C": "Tất cả các yêu cầu liên quan đến mã được kiểm tra đều được đáp ứng",
      "D": "Mỗi kết quả quyết định trong mã phải được đánh giá cả đúng và sai"
    },
    "explanation_vi": "Đáp án đúng là A: Mỗi câu lệnh thực thi có lỗi phải được thực hiện ít nhất một lần"
  },
  {
    "id": 188,
    "topic": "Exam A",
    "question": "If: • EC = number of exercised conditional branches in a code • EU = number of exercised unconditional branches in a code • С = number of conditional branches in a code • U = number of unconditional branches in a code Which metric correctly defines the branch coverage?",
    "options": {
      "A": "ЕС/С + EU/U",
      "B": "(EC+EU) / (C+U)",
      "C": "EC/С",
      "D": "EC + EU"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: (EC+EU) / (C+U)",
    "question_vi": "Nếu: • EC = số nhánh có điều kiện được thực hiện trong một mã • EU = số nhánh vô điều kiện được thực hiện trong một mã • С = số nhánh có điều kiện trong một mã • U = số nhánh không điều kiện trong một mã Số liệu nào xác định chính xác độ bao phủ nhánh?",
    "options_vi": {
      "A": "ЕС/С + EU/U",
      "B": "(EC+EU) / (C+U)",
      "C": "EC/С",
      "D": "EC + EU"
    },
    "explanation_vi": "Câu trả lời đúng là B: (EC+EU) / (C+U)"
  },
  {
    "id": 189,
    "topic": "Exam A",
    "question": "What is error guessing?",
    "options": {
      "A": "A test technique in which the tester anticipates the mistakes the developer might make, defects they might introduce, and failures that may occur due to these defects",
      "B": "A test technique in which a tester designs, implements, and executes tests to cover test conditions from a checklist built based on knowledge about how software fails",
      "C": "A test estimation technique in which testers use their knowledge and experience to estimate the effort needed to fix problems in the test process due to testers’ mistakes",
      "D": "A type of software testing that identifies vulnerabilities, threats, and risks in a system to ensure its resources are protected from unauthorized access and malicious attacks"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: A test technique in which the tester anticipates the mistakes the developer might make, defects they might introduce, and failures that may occur due to these defects",
    "question_vi": "Đoán lỗi là gì?",
    "options_vi": {
      "A": "Một kỹ thuật kiểm thử trong đó người kiểm thử dự đoán những lỗi mà nhà phát triển có thể mắc phải, những lỗi mà họ có thể gây ra và những lỗi có thể xảy ra do những lỗi này.",
      "B": "Một kỹ thuật kiểm thử trong đó người kiểm thử thiết kế, thực hiện và thực hiện các kiểm thử để bao quát các điều kiện kiểm thử từ một danh sách kiểm tra được xây dựng dựa trên kiến ​​thức về lỗi phần mềm như thế nào",
      "C": "Một kỹ thuật ước lượng kiểm thử trong đó người kiểm thử sử dụng kiến ​​thức và kinh nghiệm của mình để ước tính nỗ lực cần thiết để khắc phục các vấn đề trong quá trình kiểm thử do lỗi của người kiểm thử.",
      "D": "Một loại kiểm thử phần mềm xác định các lỗ hổng, mối đe dọa và rủi ro trong hệ thống để đảm bảo tài nguyên của nó được bảo vệ khỏi sự truy cập trái phép và các cuộc tấn công độc hại"
    },
    "explanation_vi": "Đáp án đúng là A: Một kỹ thuật kiểm thử trong đó người kiểm thử dự đoán những lỗi mà nhà phát triển có thể mắc phải, những lỗi mà họ có thể đưa ra và những lỗi có thể xảy ra do những lỗi này"
  },
  {
    "id": 190,
    "topic": "Exam A",
    "question": "Which of the following is TRUE about exploratory testing?",
    "options": {
      "A": "It is more effective when a tester is less experienced and has no domain knowledge",
      "B": "It uses test results to learn more about the test object and create more focused tests",
      "C": "It allows the use of experience-based test techniques but not black-box test techniques",
      "D": "It focuses not only on defect detection but also on defect avoidance through collaboration"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: It uses test results to learn more about the test object and create more focused tests",
    "question_vi": "Điều nào sau đây là ĐÚNG về thử nghiệm thăm dò?",
    "options_vi": {
      "A": "Sẽ hiệu quả hơn khi người kiểm thử ít kinh nghiệm hơn và không có kiến ​​thức về miền",
      "B": "Nó sử dụng kết quả kiểm tra để tìm hiểu thêm về đối tượng kiểm tra và tạo các bài kiểm tra tập trung hơn",
      "C": "Nó cho phép sử dụng các kỹ thuật kiểm thử dựa trên kinh nghiệm nhưng không cho phép sử dụng các kỹ thuật kiểm thử hộp đen",
      "D": "Nó không chỉ tập trung vào việc phát hiện lỗi mà còn tránh lỗi thông qua cộng tác"
    },
    "explanation_vi": "Đáp án đúng là B: Nó sử dụng kết quả kiểm tra để tìm hiểu thêm về đối tượng kiểm tra và tạo ra các bài kiểm tra tập trung hơn"
  },
  {
    "id": 191,
    "topic": "Exam A",
    "question": "Consider the following two versions of acceptance criteria for a user story: “As a registered user, I want to be able to change my user’s name to update my personal data” What is the format of the acceptance criteria in these variants?",
    "options": {
      "A": "Both variants use a scenario-oriented format",
      "B": "Both variants use a rule-oriented format",
      "C": "Variant 1 is rule-oriented; Variant 2 is scenario-oriented",
      "D": "Variant 1 is scenario-oriented; Variant 2 is rule-oriented"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Variant 1 is rule-oriented; Variant 2 is scenario-oriented",
    "question_vi": "Hãy xem xét hai phiên bản tiêu chí chấp nhận sau đây cho một câu chuyện của người dùng: “Là người dùng đã đăng ký, tôi muốn có thể thay đổi tên người dùng để cập nhật dữ liệu cá nhân của mình” Định dạng của tiêu chí chấp nhận trong các biến thể này là gì?",
    "options_vi": {
      "A": "Cả hai biến thể đều sử dụng định dạng hướng theo kịch bản",
      "B": "Cả hai biến thể đều sử dụng định dạng hướng quy tắc",
      "C": "Biến thể 1 hướng tới quy tắc; Biến thể 2 thiên về kịch bản",
      "D": "Biến thể 1 thiên về kịch bản; Biến thể 2 hướng tới quy tắc"
    },
    "explanation_vi": "Đáp án đúng là C: Biến thể 1 thiên về quy tắc; Biến thể 2 thiên về kịch bản"
  },
  {
    "id": 192,
    "topic": "Exam A",
    "question": "Which TWO are the examples of entry criteria for system testing of a food order app? (Choose two.)",
    "options": {
      "A": "All functional tests for the payment process are automated",
      "B": "A test basis describing the business rules for discounts is available",
      "C": "All smoke tests of the registering and logging features passed",
      "D": "The appropriate functional tests cover all use casesE. There are no critical and at most 3 major defects unresolved"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: All smoke tests of the registering and logging features passed",
    "question_vi": "HAI ví dụ nào là ví dụ về tiêu chí đầu vào để thử nghiệm hệ thống của ứng dụng đặt đồ ăn? (Chọn hai.)",
    "options_vi": {
      "A": "Tất cả các thử nghiệm chức năng cho quá trình thanh toán đều được tự động hóa",
      "B": "Đã có cơ sở thử nghiệm mô tả các quy tắc kinh doanh để giảm giá",
      "C": "Tất cả các bài kiểm tra khói của tính năng đăng ký và ghi nhật ký đã vượt qua",
      "D": "Các thử nghiệm chức năng thích hợp bao gồm tất cả các trường hợp sử dụngE. Không có lỗi nghiêm trọng và nhiều nhất là 3 lỗi lớn chưa được giải quyết"
    },
    "explanation_vi": "Đáp án đúng là C: Tất cả các smoke test của tính năng đăng ký và ghi nhật ký đều pass"
  },
  {
    "id": 193,
    "topic": "Exam A",
    "question": "Your team is developing a new functionality for an employee management system, a Simple Reporting feature. The team is tasked with estimating the test effort required to test this feature. The team used the standard three-point estimation method to provide the predicted effort. The team came up with the following estimates: • in the optimistic scenario, the testing can be done in 1 hour • in the most likely scenario, the testing can be done in 2 hours • in the worst-case scenario, the testing can be done in 9 hours What is the team's final estimation of the test effort?",
    "options": {
      "A": "4 hours",
      "B": "2 hours",
      "C": "3 hours",
      "D": "6 hours"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: 3 hours",
    "question_vi": "Nhóm của bạn đang phát triển một chức năng mới cho hệ thống quản lý nhân viên, tính năng Báo cáo Đơn giản. Nhóm có nhiệm vụ ước tính nỗ lực kiểm tra cần thiết để kiểm tra tính năng này. Nhóm đã sử dụng phương pháp ước tính ba điểm tiêu chuẩn để đưa ra nỗ lực dự đoán. Nhóm đã đưa ra các ước tính sau: • trong trường hợp lạc quan, việc kiểm thử có thể được thực hiện trong 1 giờ • trong trường hợp có khả năng xảy ra nhất, việc kiểm thử có thể được thực hiện trong 2 giờ • trong trường hợp xấu nhất, việc kiểm thử có thể được thực hiện trong 9 giờ. Ước tính cuối cùng của nhóm về nỗ lực kiểm thử là gì?",
    "options_vi": {
      "A": "4 giờ",
      "B": "2 giờ",
      "C": "3 giờ",
      "D": "6 giờ"
    },
    "explanation_vi": "Đáp án đúng là C: 3 giờ"
  },
  {
    "id": 194,
    "topic": "Exam A",
    "question": "You prioritize test cases using the additional coverage prioritization technique, using the requirements coverage as a coverage measure. All four test cases must be executed. The coverage achieved by your test cases is shown in the table below. Which test case should be executed LAST?",
    "options": {
      "A": "TC1",
      "B": "TC2",
      "C": "TC3",
      "D": "TC4"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: TC3",
    "question_vi": "Bạn ưu tiên các trường hợp thử nghiệm bằng cách sử dụng kỹ thuật ưu tiên phạm vi bổ sung, sử dụng phạm vi yêu cầu làm thước đo phạm vi bao phủ. Tất cả bốn trường hợp thử nghiệm phải được thực hiện. Phạm vi đạt được của các trường hợp thử nghiệm của bạn được hiển thị trong bảng bên dưới. Trường hợp kiểm thử nào nên được thực hiện CUỐI CÙNG?",
    "options_vi": {
      "A": "TC1",
      "B": "TC2",
      "C": "TC3",
      "D": "TC4"
    },
    "explanation_vi": "Câu trả lời đúng là C: TC3"
  },
  {
    "id": 195,
    "topic": "Exam A",
    "question": "In the testing quadrants model, which testing is business-facing and supports the team?",
    "options": {
      "A": "Security testing",
      "B": "Component testing",
      "C": "API testing",
      "D": "Exploratory testing"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: API testing",
    "question_vi": "Trong mô hình góc phần tư thử nghiệm, thử nghiệm nào hướng tới doanh nghiệp và hỗ trợ nhóm?",
    "options_vi": {
      "A": "Kiểm tra bảo mật",
      "B": "Kiểm tra thành phần",
      "C": "thử nghiệm API",
      "D": "Thử nghiệm thăm dò"
    },
    "explanation_vi": "Đáp án đúng là C: API testing"
  },
  {
    "id": 196,
    "topic": "Exam A",
    "question": "What does the risk level depend on?",
    "options": {
      "A": "Risk impact and risk likelihood",
      "B": "Risk likelihood and risk priority",
      "C": "Risk impact and risk severity",
      "D": "Risk priority and risk severity"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Risk impact and risk likelihood",
    "question_vi": "Mức độ rủi ro phụ thuộc vào điều gì?",
    "options_vi": {
      "A": "Tác động rủi ro và khả năng xảy ra rủi ro",
      "B": "Khả năng xảy ra rủi ro và mức độ ưu tiên rủi ro",
      "C": "Tác động của rủi ro và mức độ nghiêm trọng của rủi ro",
      "D": "Mức độ ưu tiên rủi ro và mức độ nghiêm trọng của rủi ro"
    },
    "explanation_vi": "Đáp án đúng là A: Tác động của rủi ro và khả năng xảy ra rủi ro"
  },
  {
    "id": 197,
    "topic": "Exam A",
    "question": "Categorize these risks into project risks and product risks. (i) Unforeseen technical difficulties, such as integrating with third-party APIs for payment or delivery tracking, could slow down progress (ii) Sensitive customer information, such as payment details and addresses, may be exposed due to insufficient security measures (iii) Uncontrolled additional feature requests or unclear requirements may lead to delays and budget overruns (iv) Limited availability of skilled developers, testers, or designers could hinder the timely delivery of the product (v) Confusing navigation may lead to user dissatisfaction, causing a high churn rate",
    "options": {
      "A": "(i), (ii), and (iv) are product risks; (iii) and (v) are project risks",
      "B": "(ii) and (v) are product risks; (i), (iii), and (iv) are project risks",
      "C": "(iii) and (v) are product risks; (i), (ii), and (iv) are project risks",
      "D": "(iii) and (iv) are product risks; (i), (ii) and (v) are project risks"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: (ii) and (v) are product risks; (i), (iii), and (iv) are project risks",
    "question_vi": "Phân loại những rủi ro này thành rủi ro dự án và rủi ro sản phẩm. (i) Những khó khăn kỹ thuật không lường trước được, chẳng hạn như việc tích hợp với API của bên thứ ba để theo dõi thanh toán hoặc giao hàng, có thể làm chậm tiến độ (ii) Thông tin nhạy cảm của khách hàng, chẳng hạn như chi tiết và địa chỉ thanh toán, có thể bị lộ do các biện pháp bảo mật không đầy đủ (iii) Các yêu cầu tính năng bổ sung không được kiểm soát hoặc các yêu cầu không rõ ràng có thể dẫn đến sự chậm trễ và vượt ngân sách (iv) Sự hạn chế của các nhà phát triển, người thử nghiệm hoặc nhà thiết kế lành nghề có thể cản trở việc giao sản phẩm kịp thời (v) Điều hướng khó hiểu có thể dẫn đến sự không hài lòng của người dùng, gây ra tình trạng rời mạng cao tỷ lệ",
    "options_vi": {
      "A": "(i), (ii) và (iv) là rủi ro sản phẩm; (iii) và (v) là rủi ro của dự án",
      "B": "(ii) và (v) là rủi ro sản phẩm; (i), (iii) và (iv) là rủi ro của dự án",
      "C": "(iii) và (v) là rủi ro sản phẩm; (i), (ii) và (iv) là rủi ro của dự án",
      "D": "(iii) và (iv) là rủi ro sản phẩm; (i), (ii) và (v) là rủi ro của dự án"
    },
    "explanation_vi": "Câu trả lời đúng là B: (ii) và (v) là rủi ro sản phẩm; (i), (iii) và (iv) là rủi ro của dự án"
  },
  {
    "id": 198,
    "topic": "Exam A",
    "question": "Which type of report will MOST LIKELY contain information about testing planned for the next period?",
    "options": {
      "A": "Test progress report",
      "B": "Defect report",
      "C": "Test completion report",
      "D": "Risk register"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Test progress report",
    "question_vi": "Loại báo cáo nào CÓ THỂ chứa thông tin về kế hoạch kiểm tra cho giai đoạn tiếp theo?",
    "options_vi": {
      "A": "Báo cáo tiến độ thử nghiệm",
      "B": "Báo cáo lỗi",
      "C": "Báo cáo hoàn thành thử nghiệm",
      "D": "Đăng ký rủi ro"
    },
    "explanation_vi": "Đáp án đúng là A: Báo cáo tiến độ kiểm tra"
  },
  {
    "id": 199,
    "topic": "Exam A",
    "question": "The customer reported the software failure in the form of a defect report, providing the version number of the software they use. Based on this information, the team identified the files used to build this version and the elements of the environment in which this version was created. This made it possible to identify and fix the defect quickly. What process enabled the above actions?",
    "options": {
      "A": "Defect management",
      "B": "Configuration management",
      "C": "Test automation",
      "D": "Test estimation"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Configuration management",
    "question_vi": "Khách hàng báo cáo lỗi phần mềm dưới dạng báo cáo lỗi, cung cấp số phiên bản của phần mềm họ sử dụng. Dựa trên thông tin này, nhóm đã xác định các tệp được sử dụng để xây dựng phiên bản này và các thành phần của môi trường mà phiên bản này được tạo. Điều này giúp có thể xác định và khắc phục lỗi một cách nhanh chóng. Quá trình nào đã kích hoạt các hành động trên?",
    "options_vi": {
      "A": "Quản lý lỗi",
      "B": "Quản lý cấu hình",
      "C": "Tự động hóa thử nghiệm",
      "D": "ước tính thử nghiệm"
    },
    "explanation_vi": "Đáp án đúng là B: Quản lý cấu hình"
  },
  {
    "id": 200,
    "topic": "Exam A",
    "question": "You prepared the following defect report. Defect ID: DR-00123 Date: 2025-01-12 Title: “Order Confirmation” button not responsive after adding items to the cart Severity: High Priority: Critical Reported By: John Doe Steps to reproduce: 1. Launch the app and log in. 2. Browse the menu and add items to the cart. 3. Navigate to the cart and tap the “Order Confirmation” button. Expected result: The “Order Confirmation” button should process the order and navigate to the confirmation screen. Actual result: The “Order Confirmation” button is unresponsive, and no action is taken. Attachments: Screenshot: [order_button_issue.png], Video: [order_button_issue.mp4] Which of the following is the BEST way to improve this report to help developers resolve the reported problem?",
    "options": {
      "A": "Add expected results after each step in the “steps to reproduce” section",
      "B": "Add environment data and link to the test case that caused the failure",
      "C": "Reduce severity and priority levels",
      "D": "Add a suggestion how a source code could he chanced to fix the underlying defect"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Add environment data and link to the test case that caused the failure",
    "question_vi": "Bạn đã chuẩn bị báo cáo lỗi sau đây. ID lỗi: DR-00123 Ngày: 2025-01-12 Tiêu đề: Nút “Xác nhận đơn hàng” không phản hồi sau khi thêm mặt hàng vào giỏ hàng Mức độ nghiêm trọng: Mức độ ưu tiên cao: Quan trọng được báo cáo bởi: John Doe Các bước sao chép: 1. Khởi chạy ứng dụng và đăng nhập. 2. Duyệt menu và thêm các mặt hàng vào giỏ hàng. 3. Điều hướng đến giỏ hàng và nhấn vào nút “Xác nhận đơn hàng”. Kết quả mong đợi: Nút “Xác nhận đơn hàng” sẽ xử lý đơn hàng và điều hướng đến màn hình xác nhận. Kết quả thực tế: Nút “Xác nhận đơn hàng” không phản hồi và không có hành động nào được thực hiện. Tệp đính kèm: Ảnh chụp màn hình: [order_button_issue.png], Video: [order_button_issue.mp4] Cách nào sau đây là cách TỐT NHẤT để cải thiện báo cáo này nhằm giúp nhà phát triển giải quyết sự cố được báo cáo?",
    "options_vi": {
      "A": "Thêm kết quả mong đợi sau mỗi bước trong phần “các bước tái tạo”",
      "B": "Thêm dữ liệu môi trường và liên kết đến trường hợp thử nghiệm gây ra lỗi",
      "C": "Giảm mức độ nghiêm trọng và mức độ ưu tiên",
      "D": "Thêm gợi ý về cách mã nguồn có thể sửa được lỗi cơ bản"
    },
    "explanation_vi": "Đáp án đúng là B: Thêm dữ liệu môi trường và liên kết tới test case gây ra lỗi"
  },
  {
    "id": 201,
    "topic": "Exam A",
    "question": "Which tools support delivery pipelines, automated build processes, and practices such as Continuous Integration/Continuous Delivery?",
    "options": {
      "A": "Collaboration tools",
      "B": "Test design and test implementation tools",
      "C": "Test management tools",
      "D": "DevOps tools"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: DevOps tools",
    "question_vi": "Những công cụ nào hỗ trợ quy trình phân phối, quy trình xây dựng tự động và các phương pháp thực hành như Tích hợp liên tục/Phân phối liên tục?",
    "options_vi": {
      "A": "Công cụ cộng tác",
      "B": "Công cụ thiết kế và triển khai thử nghiệm",
      "C": "Công cụ quản lý kiểm tra",
      "D": "Công cụ DevOps"
    },
    "explanation_vi": "Câu trả lời đúng là D: DevOps tools"
  },
  {
    "id": 202,
    "topic": "Exam A",
    "question": "Which of the following BEST illustrates the benefit of using test coverage tools?",
    "options": {
      "A": "Ease of configuration management",
      "B": "More objective assessment",
      "C": "Better defect prevention",
      "D": "Dependency on tool vendor"
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: More objective assessment",
    "question_vi": "Điều nào sau đây TỐT NHẤT minh họa lợi ích của việc sử dụng các công cụ bao quát thử nghiệm?",
    "options_vi": {
      "A": "Dễ dàng quản lý cấu hình",
      "B": "Đánh giá khách quan hơn",
      "C": "Phòng ngừa khuyết tật tốt hơn",
      "D": "Sự phụ thuộc vào nhà cung cấp công cụ"
    },
    "explanation_vi": "Đáp án đúng là B: Đánh giá khách quan hơn"
  },
  {
    "id": 203,
    "topic": "Exam A",
    "question": "Which of the following statements about how different types of test tools support testers is true?",
    "options": {
      "A": "The support offered by a test data preparation tool is often leveraged by testers to run automated regression test suites.",
      "B": "The support offered by a performance testing tool is often leveraged by testers to run load tests.",
      "C": "The support offered by a bug prediction tool is often used by testers to track the bugs they found.",
      "D": "The support offered by a continuous integration tool is often leveraged by testers to automatically generate test cases from a model."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: The support offered by a performance testing tool is often leveraged by testers to run load tests.",
    "question_vi": "Câu nào sau đây về cách các loại công cụ kiểm tra khác nhau hỗ trợ người kiểm tra là đúng?",
    "options_vi": {
      "A": "Sự hỗ trợ được cung cấp bởi công cụ chuẩn bị dữ liệu thử nghiệm thường được người thử nghiệm tận dụng để chạy các bộ thử nghiệm hồi quy tự động.",
      "B": "Sự hỗ trợ được cung cấp bởi công cụ kiểm tra hiệu suất thường được người kiểm tra tận dụng để chạy thử nghiệm tải.",
      "C": "Sự hỗ trợ được cung cấp bởi công cụ dự đoán lỗi thường được người kiểm tra sử dụng để theo dõi các lỗi mà họ tìm thấy.",
      "D": "Sự hỗ trợ được cung cấp bởi công cụ tích hợp liên tục thường được người thử nghiệm tận dụng để tự động tạo các trường hợp thử nghiệm từ một mô hình."
    },
    "explanation_vi": "Đáp án đúng là B: Sự hỗ trợ được cung cấp bởi công cụ kiểm tra hiệu suất thường được người kiểm tra tận dụng để chạy thử nghiệm tải."
  },
  {
    "id": 204,
    "topic": "Exam A",
    "question": "Following a risk-based testing approach you have designed 10 tests to cover a product risk with a high-risk level. You want to estimate, adopting the three-point test estimation technique, the test effort required to reduce the risk level to zero by executing those 10 tests. You made the following three initial estimates: most optimistic = 6 person hours. most likely = 30 person hours. most pessimistic = 54 person hours. Based only on the given information, which of the following answers about the three-point test estimation technique applied to this problem is true?",
    "options": {
      "A": "The final estimate is between 22 person hours and 38 person hours.",
      "B": "The final estimate is exactly 30 person hours because the technique uses the initial most likely estimate as the final estimate.",
      "C": "The final estimate is between 6 person hours and 54 person hours.",
      "D": "The final estimate is exactly 30 person hours because the technique uses the arithmetic mean of the three initial estimates as the final estimate."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: The final estimate is between 6 person hours and 54 person hours.",
    "question_vi": "Theo phương pháp thử nghiệm dựa trên rủi ro, bạn đã thiết kế 10 thử nghiệm để xử lý rủi ro sản phẩm ở mức rủi ro cao. Bạn muốn ước tính, áp dụng kỹ thuật ước lượng kiểm tra ba điểm, nỗ lực kiểm tra cần thiết để giảm mức rủi ro xuống 0 bằng cách thực hiện 10 thử nghiệm đó. Bạn đã đưa ra ba ước tính ban đầu sau: lạc quan nhất = 6 giờ công. rất có thể = 30 giờ công. bi quan nhất = 54 giờ công. Chỉ dựa trên những thông tin đã cho, câu trả lời nào sau đây về kỹ thuật ước lượng kiểm tra ba điểm áp dụng cho bài toán này là đúng?",
    "options_vi": {
      "A": "Ước tính cuối cùng là từ 22 giờ công đến 38 giờ công.",
      "B": "Ước tính cuối cùng chính xác là 30 giờ công vì kỹ thuật này sử dụng ước tính có khả năng xảy ra ban đầu nhất làm ước tính cuối cùng.",
      "C": "Ước tính cuối cùng là từ 6 giờ công đến 54 giờ công.",
      "D": "Ước tính cuối cùng chính xác là 30 giờ công vì kỹ thuật này sử dụng giá trị trung bình số học của ba ước tính ban đầu làm ước tính cuối cùng."
    },
    "explanation_vi": "Đáp án đúng là C: Ước tính cuối cùng là từ 6 giờ đến 54 giờ."
  },
  {
    "id": 205,
    "topic": "Exam A",
    "question": "The whole-team approach:",
    "options": {
      "A": "promotes the idea that all team members should have a thorough understanding of test techniques.",
      "B": "is a consensus-based approach that involves the whole team in estimating user stories.",
      "C": "promotes the idea that all team members should be responsible for the quality of the product.",
      "D": "is mostly adopted in projects aimed at developing safety-critical systems, as it ensures the highest level of test independence"
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: promotes the idea that all team members should be responsible for the quality of the product.",
    "question_vi": "Phương pháp toàn đội:",
    "options_vi": {
      "A": "thúc đẩy ý tưởng rằng tất cả các thành viên trong nhóm nên có sự hiểu biết thấu đáo về các kỹ thuật kiểm tra.",
      "B": "là một cách tiếp cận dựa trên sự đồng thuận có sự tham gia của cả nhóm trong việc ước tính các câu chuyện của người dùng.",
      "C": "thúc đẩy ý tưởng rằng tất cả các thành viên trong nhóm phải chịu trách nhiệm về chất lượng của sản phẩm.",
      "D": "chủ yếu được áp dụng trong các dự án nhằm phát triển các hệ thống quan trọng về an toàn, vì nó đảm bảo mức độ độc lập kiểm tra cao nhất"
    },
    "explanation_vi": "Đáp án đúng là C: đề cao ý tưởng rằng tất cả các thành viên trong nhóm phải chịu trách nhiệm về chất lượng của sản phẩm."
  },
  {
    "id": 206,
    "topic": "Exam A",
    "question": "Which of the following statements is true?",
    "options": {
      "A": "A defect does not always produce a failure, while a bug always produces a failure.",
      "B": "A defect may cause a failure which, when occurring, always causes an error.",
      "C": "Failures can be caused by defects, but also by environmental conditions.",
      "D": "Bugs are defects found during component testing, while failures are defects found during higher test levels."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Failures can be caused by defects, but also by environmental conditions.",
    "question_vi": "Phát biểu nào sau đây là đúng?",
    "options_vi": {
      "A": "Một lỗi không phải lúc nào cũng tạo ra lỗi, trong khi lỗi luôn tạo ra lỗi.",
      "B": "Một khiếm khuyết có thể gây ra lỗi mà khi xảy ra luôn gây ra lỗi.",
      "C": "Thất bại có thể được gây ra bởi khuyết tật, nhưng cũng có thể do điều kiện môi trường.",
      "D": "Lỗi là các lỗi được tìm thấy trong quá trình kiểm tra thành phần, trong khi lỗi là các lỗi được tìm thấy ở các cấp độ kiểm tra cao hơn."
    },
    "explanation_vi": "Đáp án đúng là C: Hư hỏng có thể do khuyết tật, nhưng cũng có thể do điều kiện môi trường."
  },
  {
    "id": 207,
    "topic": "Exam A",
    "question": "The fact that defects are usually not evenly distributed among the various modules that make up a software application, but rather their distribution tends to reflect the Pareto principle:",
    "options": {
      "A": "is a false myth.",
      "B": "is expressed by the testing principle referred to as ‘Tests wear out’.",
      "C": "is expressed by the testing principle referred to as ‘Defects cluster together’.",
      "D": "is expressed by the testing principle referred to as ‘Bug prediction’."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: is expressed by the testing principle referred to as ‘Defects cluster together’.",
    "question_vi": "Thực tế là các lỗi thường không được phân bố đồng đều giữa các mô-đun khác nhau tạo nên một ứng dụng phần mềm, mà sự phân bổ của chúng có xu hướng phản ánh nguyên tắc Pareto:",
    "options_vi": {
      "A": "là một huyền thoại sai lầm.",
      "B": "được thể hiện bằng nguyên tắc thử nghiệm được gọi là 'Thử nghiệm bị hao mòn'.",
      "C": "được thể hiện bằng nguyên tắc kiểm tra được gọi là 'Nhóm các khuyết tật lại với nhau'.",
      "D": "được thể hiện bằng nguyên tắc thử nghiệm được gọi là 'Dự đoán lỗi'."
    },
    "explanation_vi": "Đáp án đúng là C: được thể hiện bằng nguyên tắc kiểm thử được gọi là ‘Các khuyết tật tập hợp lại với nhau’."
  },
  {
    "id": 208,
    "topic": "Exam A",
    "question": "Which of the following is a test task that usually occurs during test implementation?",
    "options": {
      "A": "Make sure the planned test environment is ready to be delivered.",
      "B": "Find, analyse, and remove the causes of the failures highlighted by the tests.",
      "C": "Archive the testware for use in future test projects.",
      "D": "Gather the metrics that are used to guide the test project."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Make sure the planned test environment is ready to be delivered.",
    "question_vi": "Điều nào sau đây là nhiệm vụ kiểm thử thường xảy ra trong quá trình thực hiện kiểm thử?",
    "options_vi": {
      "A": "Đảm bảo môi trường thử nghiệm theo kế hoạch đã sẵn sàng để được chuyển giao.",
      "B": "Tìm, phân tích và loại bỏ các nguyên nhân gây ra lỗi được nêu bật trong các bài kiểm tra.",
      "C": "Lưu trữ phần mềm thử nghiệm để sử dụng trong các dự án thử nghiệm trong tương lai.",
      "D": "Thu thập các số liệu được sử dụng để hướng dẫn dự án thử nghiệm."
    },
    "explanation_vi": "Đáp án đúng là A: Đảm bảo môi trường thử nghiệm theo kế hoạch đã sẵn sàng để bàn giao."
  },
  {
    "id": 209,
    "topic": "Exam A",
    "question": "A virtual service emulating a real third-party service and the automated test scripts (aimed at testing the system under test) that interact with that service, are test work products that are typically created during:",
    "options": {
      "A": "Test monitoring and control.",
      "B": "Test implementation.",
      "C": "Test design.",
      "D": "Test analysis."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Test implementation.",
    "question_vi": "Dịch vụ ảo mô phỏng dịch vụ thực của bên thứ ba và các tập lệnh kiểm thử tự động (nhằm mục đích kiểm thử hệ thống đang được kiểm thử) tương tác với dịch vụ đó, là các sản phẩm công việc kiểm thử thường được tạo trong quá trình:",
    "options_vi": {
      "A": "Giám sát và kiểm soát thử nghiệm.",
      "B": "Triển khai thử nghiệm.",
      "C": "Thiết kế thử nghiệm.",
      "D": "Phân tích thử nghiệm."
    },
    "explanation_vi": "Câu trả lời đúng là B: Thực hiện thử nghiệm."
  },
  {
    "id": 210,
    "topic": "Exam A",
    "question": "Which of the following statements about the value of maintaining traceability between the test basis and test work products is false?",
    "options": {
      "A": "Traceability can be useful for assessing the impact of a change to a test basis item on the corresponding tests.",
      "B": "Traceability can be useful for determining how many test basis items are covered by the corresponding tests.",
      "C": "Traceability can be useful for determining the most suitable test techniques to be used in a testing project.",
      "D": "Traceability can be useful to support the needs required by the auditing of testing."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Traceability can be useful for determining the most suitable test techniques to be used in a testing project.",
    "question_vi": "Câu nào sau đây về giá trị của việc duy trì khả năng truy xuất nguồn gốc giữa cơ sở thử nghiệm và sản phẩm công việc thử nghiệm là sai?",
    "options_vi": {
      "A": "Khả năng truy xuất nguồn gốc có thể hữu ích cho việc đánh giá tác động của sự thay đổi đối với hạng mục cơ sở kiểm thử đối với các kiểm thử tương ứng.",
      "B": "Truy xuất nguồn gốc có thể hữu ích để xác định có bao nhiêu hạng mục cơ sở kiểm thử được bao phủ bởi các kiểm thử tương ứng.",
      "C": "Truy xuất nguồn gốc có thể hữu ích để xác định các kỹ thuật kiểm tra phù hợp nhất sẽ được sử dụng trong một dự án thử nghiệm.",
      "D": "Truy xuất nguồn gốc có thể hữu ích để hỗ trợ các nhu cầu được yêu cầu bởi việc kiểm tra thử nghiệm."
    },
    "explanation_vi": "Đáp án đúng là C: Khả năng truy xuất nguồn gốc có thể hữu ích trong việc xác định các kỹ thuật kiểm thử phù hợp nhất sẽ được sử dụng trong một dự án kiểm thử."
  },
  {
    "id": 211,
    "topic": "Exam A",
    "question": "Which of the following is not an example of a typical generic skill required for testing?",
    "options": {
      "A": "Be able to apply test-driven development.",
      "B": "Be able to use test management tools and defect tracking tools.",
      "C": "Be able to communicate defects and failures to developers as objectively as possible.",
      "D": "Possess the necessary social skills that support effective teamwork."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: Be able to apply test-driven development.",
    "question_vi": "Điều nào sau đây không phải là ví dụ về kỹ năng chung điển hình cần thiết để kiểm tra?",
    "options_vi": {
      "A": "Có thể áp dụng phát triển dựa trên thử nghiệm.",
      "B": "Có thể sử dụng các công cụ quản lý kiểm tra và công cụ theo dõi lỗi.",
      "C": "Có thể truyền đạt các khiếm khuyết và lỗi cho các nhà phát triển một cách khách quan nhất có thể.",
      "D": "Sở hữu các kỹ năng xã hội cần thiết để hỗ trợ làm việc nhóm hiệu quả."
    },
    "explanation_vi": "Đáp án đúng là A: Có thể áp dụng phát triển dựa trên thử nghiệm."
  },
  {
    "id": 212,
    "topic": "Exam A",
    "question": "Which of the following statements refers to a good testing practice that applies to all software development lifecycles?",
    "options": {
      "A": "Tests should be written in executable format before the code is written and should act as executable specifications that drive coding.",
      "B": "Test levels should be defined such that the exit criteria of one level are part of the entry criteria for the next level.",
      "C": "Test objectives should be the same for all test levels, although the number of tests designed at various levels can vary significantly.",
      "D": "Involvement of testers in work product reviews should occur as early as possible to take advantage of the early testing principle."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Involvement of testers in work product reviews should occur as early as possible to take advantage of the early testing principle.",
    "question_vi": "Câu nào sau đây đề cập đến một phương pháp kiểm thử tốt áp dụng cho tất cả vòng đời phát triển phần mềm?",
    "options_vi": {
      "A": "Các thử nghiệm phải được viết ở định dạng thực thi được trước khi viết mã và phải hoạt động như các thông số kỹ thuật thực thi thúc đẩy quá trình mã hóa.",
      "B": "Các cấp độ kiểm tra phải được xác định sao cho tiêu chí đầu ra của một cấp độ là một phần của tiêu chí đầu vào của cấp độ tiếp theo.",
      "C": "Mục tiêu kiểm tra phải giống nhau ở tất cả các cấp độ kiểm tra, mặc dù số lượng bài kiểm tra được thiết kế ở các cấp độ khác nhau có thể khác nhau đáng kể.",
      "D": "Sự tham gia của người thử nghiệm vào quá trình đánh giá sản phẩm công việc nên diễn ra càng sớm càng tốt để tận dụng nguyên tắc thử nghiệm sớm."
    },
    "explanation_vi": "Câu trả lời đúng là D: Sự tham gia của người thử nghiệm vào quá trình đánh giá sản phẩm công việc nên diễn ra càng sớm càng tốt để tận dụng nguyên tắc thử nghiệm sớm."
  },
  {
    "id": 213,
    "topic": "Exam A",
    "question": "Which of the following is a test-first approach to development, where tests that express a shared understanding from stakeholders of how the application is expected to work, are first written in business-readable language (following the Given/When/Then format), and then made executable to drive development?",
    "options": {
      "A": "Test-Driven Development (TDD).",
      "B": "Acceptance Test-Driven Development (ATDD).",
      "C": "Behaviour-Driven Development (BDD).",
      "D": "Domain-Driven Design (DDD)."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Behaviour-Driven Development (BDD).",
    "question_vi": "Điều nào sau đây là cách tiếp cận phát triển thử nghiệm đầu tiên, trong đó các thử nghiệm thể hiện sự hiểu biết chung từ các bên liên quan về cách ứng dụng dự kiến ​​hoạt động, trước tiên được viết bằng ngôn ngữ có thể đọc được trong kinh doanh (theo định dạng Cho trước/Khi/Sau đó), và sau đó được thực thi để thúc đẩy sự phát triển?",
    "options_vi": {
      "A": "Phát triển dựa trên thử nghiệm (TDD).",
      "B": "Phát triển dựa trên thử nghiệm chấp nhận (ATDD).",
      "C": "Phát triển theo hướng hành vi (BDD).",
      "D": "Thiết kế hướng tên miền (DDD)."
    },
    "explanation_vi": "Đáp án đúng là C: Phát triển theo hướng hành vi (BDD)."
  },
  {
    "id": 214,
    "topic": "Exam A",
    "question": "Which of the following statements is true?",
    "options": {
      "A": "Functional testing focuses on what the system should do while non-functional testing focuses on the internal structure of the system.",
      "B": "Non-functional testing includes testing of both technical and non-technical quality characteristics.",
      "C": "Testers who perform functional tests are generally expected to have more technical skills than testers who perform non-functional tests.",
      "D": "The test techniques that can be used to design white-box tests are described in the ISO/IEC 25010 standard."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: Non-functional testing includes testing of both technical and non-technical quality characteristics.",
    "question_vi": "Phát biểu nào sau đây là đúng?",
    "options_vi": {
      "A": "Kiểm thử chức năng tập trung vào những gì hệ thống nên làm trong khi kiểm thử phi chức năng tập trung vào cấu trúc bên trong của hệ thống.",
      "B": "Kiểm tra phi chức năng bao gồm kiểm tra cả đặc tính chất lượng kỹ thuật và phi kỹ thuật.",
      "C": "Những người kiểm tra thực hiện các bài kiểm tra chức năng thường được kỳ vọng sẽ có nhiều kỹ năng kỹ thuật hơn những người kiểm tra thực hiện các bài kiểm tra phi chức năng.",
      "D": "Các kỹ thuật kiểm thử có thể được sử dụng để thiết kế kiểm thử hộp trắng được mô tả trong tiêu chuẩn ISO/IEC 25010."
    },
    "explanation_vi": "Đáp án đúng là B: Kiểm tra phi chức năng bao gồm kiểm tra cả đặc tính chất lượng kỹ thuật và phi kỹ thuật."
  },
  {
    "id": 215,
    "topic": "Exam A",
    "question": "Confirmation testing is performed after:",
    "options": {
      "A": "a defect is fixed and after other tests do not find any side-effect introduced in the software as a result of such fix",
      "B": "a failed test, and aims to run that test again to confirm that the same behaviour still occurs and thus appears to be reproducible.",
      "C": "the execution of an automated regression test suite to confirm the absence of false positives in the test results.",
      "D": "a defect is fixed, and if such testing is successful then the regression tests that are relevant for such fix can be executed."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: a defect is fixed, and if such testing is successful then the regression tests that are relevant for such fix can be executed.",
    "question_vi": "Kiểm tra xác nhận được thực hiện sau:",
    "options_vi": {
      "A": "một lỗi đã được khắc phục và sau các thử nghiệm khác không tìm thấy bất kỳ tác dụng phụ nào được đưa vào phần mềm do việc sửa lỗi đó",
      "B": "một thử nghiệm không thành công và nhằm mục đích chạy lại thử nghiệm đó để xác nhận rằng hành vi tương tự vẫn xảy ra và do đó dường như có thể tái diễn.",
      "C": "việc thực hiện bộ kiểm tra hồi quy tự động để xác nhận rằng không có kết quả dương tính giả trong kết quả kiểm tra.",
      "D": "một lỗi đã được sửa và nếu thử nghiệm đó thành công thì các thử nghiệm hồi quy liên quan đến việc sửa lỗi đó có thể được thực hiện."
    },
    "explanation_vi": "Đáp án đúng là D: một lỗi đã được sửa và nếu thử nghiệm đó thành công thì các thử nghiệm hồi quy liên quan đến việc sửa lỗi đó có thể được thực hiện."
  },
  {
    "id": 216,
    "topic": "Exam A",
    "question": "Which of the following statements is true?",
    "options": {
      "A": "In Agile software development, work product documentation tends to be lightweight and manual tests tend to be often unscripted as they are often produced using experience-based test techniques.",
      "B": "Sequential development models impose the use of systematic test techniques and do not allow the use of experience-based test techniques.",
      "C": "In Agile software development, the first iterations are exclusively dedicated to testing activities, as testing will be used to drive development, which will be performed in the subsequent iterations.",
      "D": "Both in Agile software development and in sequential development models, such as the V-model, test levels tend to overlap since they do not usually have defined entry and exit criteria."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: In Agile software development, work product documentation tends to be lightweight and manual tests tend to be often unscripted as they are often produced using experience-based test techniques.",
    "question_vi": "Phát biểu nào sau đây là đúng?",
    "options_vi": {
      "A": "Trong quá trình phát triển phần mềm Agile, tài liệu về sản phẩm công việc có xu hướng nhẹ nhàng và các bài kiểm tra thủ công thường không có kịch bản vì chúng thường được tạo ra bằng các kỹ thuật kiểm tra dựa trên kinh nghiệm.",
      "B": "Các mô hình phát triển tuần tự áp đặt việc sử dụng các kỹ thuật kiểm thử có hệ thống và không cho phép sử dụng các kỹ thuật kiểm thử dựa trên kinh nghiệm.",
      "C": "Trong phát triển phần mềm Agile, các lần lặp đầu tiên được dành riêng cho các hoạt động thử nghiệm, vì thử nghiệm sẽ được sử dụng để thúc đẩy sự phát triển, việc này sẽ được thực hiện trong các lần lặp tiếp theo.",
      "D": "Cả trong phát triển phần mềm Agile và trong các mô hình phát triển tuần tự, chẳng hạn như mô hình chữ V, các cấp độ kiểm tra có xu hướng chồng chéo vì chúng thường không có tiêu chí đầu vào và đầu ra xác định."
    },
    "explanation_vi": "Đáp án đúng là A: Trong quá trình phát triển phần mềm Agile, tài liệu sản phẩm công việc có xu hướng nhẹ và các bài kiểm tra thủ công thường không có kịch bản vì chúng thường được tạo ra bằng các kỹ thuật kiểm tra dựa trên kinh nghiệm."
  },
  {
    "id": 217,
    "topic": "Exam A",
    "question": "Which of the following statements about the shift-left approach is true?",
    "options": {
      "A": "Shift-left in testing can be implemented only in Agile/DevOps frameworks, as it relies completely on automated testing activities performed within a continuous integration process.",
      "B": "Performance testing performed at the component test level is a form of shift-left in testing that avoids planning and executing costly end-to-end testing at the system test level in a production-like environment.",
      "C": "Shift-left in testing can be implemented in several ways to find functional defects early in the lifecycle, but it cannot be relied upon to find defects associated with non-functional characteristics.",
      "D": "Continuous integration supports shift-left in testing as it can reduce the time between the introduction of a defect and its detection, thereby reducing the cost to fix it."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Continuous integration supports shift-left in testing as it can reduce the time between the introduction of a defect and its detection, thereby reducing the cost to fix it.",
    "question_vi": "Phát biểu nào sau đây về phương pháp dịch trái là đúng?",
    "options_vi": {
      "A": "Shift-left trong thử nghiệm chỉ có thể được triển khai trong các khung Agile/DevOps vì nó hoàn toàn dựa vào các hoạt động thử nghiệm tự động được thực hiện trong một quy trình tích hợp liên tục.",
      "B": "Kiểm thử hiệu năng được thực hiện ở cấp độ kiểm thử thành phần là một hình thức chuyển sang trái trong kiểm thử nhằm tránh việc lập kế hoạch và thực hiện kiểm thử toàn diện tốn kém ở cấp độ kiểm thử hệ thống trong một môi trường giống như sản xuất.",
      "C": "Shift-left trong thử nghiệm có thể được thực hiện theo một số cách để sớm tìm ra các lỗi chức năng trong vòng đời, nhưng không thể dựa vào nó để tìm ra các lỗi liên quan đến các đặc điểm phi chức năng.",
      "D": "Tích hợp liên tục hỗ trợ shift-left trong thử nghiệm vì nó có thể giảm thời gian từ khi đưa ra lỗi đến khi phát hiện lỗi, từ đó giảm chi phí sửa lỗi."
    },
    "explanation_vi": "Giải pháp đúng là D: Tích hợp liên tục hỗ trợ shift-left trong thử nghiệm vì nó có thể giảm thời gian từ khi đưa ra lỗi đến khi phát hiện lỗi, từ đó giảm chi phí sửa lỗi."
  },
  {
    "id": 218,
    "topic": "Exam A",
    "question": "Which of the following work products cannot be examined by static analysis?",
    "options": {
      "A": "Test plans.",
      "B": "Source code.",
      "C": "Compiled code.",
      "D": "Formal models."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Compiled code.",
    "question_vi": "Sản phẩm công việc nào sau đây không thể được kiểm tra bằng phân tích tĩnh?",
    "options_vi": {
      "A": "Kế hoạch thử nghiệm.",
      "B": "Mã nguồn.",
      "C": "Mã được biên dịch.",
      "D": "Các mô hình chính thức."
    },
    "explanation_vi": "Câu trả lời đúng là C: Mã được biên dịch."
  },
  {
    "id": 219,
    "topic": "Exam A",
    "question": "Which of the following is a task the author is responsible for, as part of a typical formal review?",
    "options": {
      "A": "Determining the people who will be involved in the review.",
      "B": "Recording the anomalies found during the review meeting.",
      "C": "Identifying potential anomalies in the work product under review.",
      "D": "Fixing the anomalies found in the work product under review."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Fixing the anomalies found in the work product under review.",
    "question_vi": "Nhiệm vụ nào sau đây là nhiệm vụ mà tác giả chịu trách nhiệm, như một phần của một bài đánh giá chính thức điển hình?",
    "options_vi": {
      "A": "Xác định những người sẽ tham gia vào việc đánh giá.",
      "B": "Ghi lại những bất thường được phát hiện trong cuộc họp đánh giá.",
      "C": "Xác định các bất thường tiềm ẩn trong sản phẩm công việc đang được xem xét.",
      "D": "Khắc phục các điểm bất thường được tìm thấy trong sản phẩm công việc đang được xem xét."
    },
    "explanation_vi": "Câu trả lời đúng là D: Khắc phục những điểm bất thường được tìm thấy trong sản phẩm công việc đang được xem xét."
  },
  {
    "id": 220,
    "topic": "Exam A",
    "question": "Which of the following statements about static testing and dynamic testing is true?",
    "options": {
      "A": "Unlike dynamic testing, which can be also performed manually, static testing cannot be performed without specialised tools.",
      "B": "Static testing is usually much less cost-effective than dynamic testing.",
      "C": "Unlike dynamic testing, which focuses on detecting potential defects, static testing focuses on detecting failures which may be due to actual defects.",
      "D": "Both static testing and dynamic testing can be used to highlight issues associated with non-functional characteristics."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Both static testing and dynamic testing can be used to highlight issues associated with non-functional characteristics.",
    "question_vi": "Câu nào sau đây về thử nghiệm tĩnh và thử nghiệm động là đúng?",
    "options_vi": {
      "A": "Không giống như kiểm thử động có thể được thực hiện thủ công, kiểm thử tĩnh không thể được thực hiện nếu không có các công cụ chuyên dụng.",
      "B": "Thử nghiệm tĩnh thường ít hiệu quả hơn nhiều so với thử nghiệm động.",
      "C": "Không giống như kiểm thử động, tập trung vào việc phát hiện các lỗi tiềm ẩn, kiểm thử tĩnh tập trung vào việc phát hiện các lỗi có thể do lỗi thực tế.",
      "D": "Cả thử nghiệm tĩnh và thử nghiệm động đều có thể được sử dụng để làm nổi bật các vấn đề liên quan đến các đặc điểm phi chức năng."
    },
    "explanation_vi": "Đáp án đúng là D: Cả thử nghiệm tĩnh và thử nghiệm động đều có thể được sử dụng để làm nổi bật các vấn đề liên quan đến đặc điểm phi chức năng."
  },
  {
    "id": 221,
    "topic": "Exam A",
    "question": "Consider a review for a high-level architectural document written by a software architect. The architect does most of the review preparation work, including distributing the document to reviewers before the review meeting However, reviewers are not required to analyse the document in advance, and during the review meeting the software architect explains the document step by step. The only goal of this review is to establish a common understanding of the software architecture that will be used in a software development project. Which of the following review types does this review refer to?",
    "options": {
      "A": "Inspection.",
      "B": "Audit.",
      "C": "Walkthrough.",
      "D": "Informal review."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Walkthrough.",
    "question_vi": "Hãy xem xét việc đánh giá một tài liệu kiến ​​trúc cấp cao được viết bởi một kiến ​​trúc sư phần mềm. Kiến trúc sư thực hiện hầu hết công việc chuẩn bị xem xét, bao gồm phân phát tài liệu cho người đánh giá trước cuộc họp đánh giá. Tuy nhiên, người đánh giá không bắt buộc phải phân tích tài liệu trước và trong cuộc họp đánh giá, kiến ​​trúc sư phần mềm sẽ giải thích tài liệu từng bước. Mục tiêu duy nhất của việc xem xét này là thiết lập sự hiểu biết chung về kiến ​​trúc phần mềm sẽ được sử dụng trong một dự án phát triển phần mềm. Đánh giá này đề cập đến loại đánh giá nào sau đây?",
    "options_vi": {
      "A": "Điều tra.",
      "B": "Kiểm toán.",
      "C": "Hướng dẫn.",
      "D": "Đánh giá không chính thức."
    },
    "explanation_vi": "Đáp án đúng là C: Walkthrough."
  },
  {
    "id": 222,
    "topic": "Exam A",
    "question": "Which of the following statements is true?",
    "options": {
      "A": "Experience-based test techniques rely on the experience of testers to identify the root causes of defects found by black-box test techniques.",
      "B": "Some of the most common test basis used by white-box test techniques include user stories, use cases and business processes.",
      "C": "Experience-based test techniques are often useful to detect hidden defects that have not been targeted by black-box test techniques.",
      "D": "The primary goal of experience-based test techniques is to design test cases that can be easily automated using a GUI-based test automation tool."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Experience-based test techniques are often useful to detect hidden defects that have not been targeted by black-box test techniques.",
    "question_vi": "Phát biểu nào sau đây là đúng?",
    "options_vi": {
      "A": "Kỹ thuật kiểm tra dựa trên kinh nghiệm dựa vào kinh nghiệm của người kiểm tra để xác định nguyên nhân gốc rễ của các lỗi được tìm thấy bằng kỹ thuật kiểm tra hộp đen.",
      "B": "Một số cơ sở kiểm thử phổ biến nhất được sử dụng bởi các kỹ thuật kiểm thử hộp trắng bao gồm câu chuyện của người dùng, trường hợp sử dụng và quy trình kinh doanh.",
      "C": "Các kỹ thuật kiểm tra dựa trên kinh nghiệm thường hữu ích để phát hiện các lỗi ẩn mà kỹ thuật kiểm tra hộp đen không nhắm tới.",
      "D": "Mục tiêu chính của các kỹ thuật kiểm thử dựa trên trải nghiệm là thiết kế các trường hợp kiểm thử có thể dễ dàng tự động hóa bằng công cụ tự động kiểm thử dựa trên GUI."
    },
    "explanation_vi": "Đáp án đúng là C: Các kỹ thuật kiểm tra dựa trên kinh nghiệm thường hữu ích để phát hiện các lỗi ẩn mà các kỹ thuật kiểm tra hộp đen chưa nhắm tới."
  },
  {
    "id": 223,
    "topic": "Exam A",
    "question": "Which of the following statements about branch coverage is true?",
    "options": {
      "A": "The minimum number of test cases needed to achieve full branch coverage, is usually lower than that needed to achieve full statement coverage.",
      "B": "If full branch coverage has been achieved, then all unconditional branches within the code have surely been exercised.",
      "C": "If full branch coverage has been achieved, then all combinations of conditions in a decision table have surely been exercised.",
      "D": "Exercising at least one of the decision outcomes for all decisions within the code, ensures achieving full branch coverage."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: If full branch coverage has been achieved, then all unconditional branches within the code have surely been exercised.",
    "question_vi": "Phát biểu nào sau đây về phạm vi chi nhánh là đúng?",
    "options_vi": {
      "A": "Số lượng trường hợp thử nghiệm tối thiểu cần thiết để đạt được phạm vi bao phủ toàn bộ nhánh thường thấp hơn số lượng cần thiết để đạt được phạm vi bao phủ toàn bộ câu lệnh.",
      "B": "Nếu đã đạt được phạm vi bao phủ toàn bộ nhánh thì tất cả các nhánh vô điều kiện trong mã chắc chắn đã được thực hiện.",
      "C": "Nếu đã đạt được phạm vi bao phủ toàn bộ nhánh thì tất cả các tổ hợp điều kiện trong bảng quyết định chắc chắn đã được thực hiện.",
      "D": "Việc thực hiện ít nhất một trong các kết quả quyết định cho tất cả các quyết định trong mã, đảm bảo đạt được phạm vi bao phủ toàn bộ chi nhánh."
    },
    "explanation_vi": "Đáp án đúng là B: Nếu đã đạt được phạm vi bao phủ toàn bộ nhánh thì tất cả các nhánh vô điều kiện trong mã chắc chắn đã được thực hiện."
  },
  {
    "id": 224,
    "topic": "Exam A",
    "question": "Which of the following statements about white-box test techniques is true?",
    "options": {
      "A": "Achieving full statement coverage and full branch coverage for a software product means that such software product has been fully tested and there are no remaining bugs within the code.",
      "B": "Code-related white-box test techniques are not required to measure the actual code coverage achieved by black-box testing, as code coverage can be measured using the coverage criteria associated with black-box test techniques.",
      "C": "Branch coverage is the most thorough code-related white-box test technique, and therefore applicable standards prescribe achieving full branch coverage at the highest safety levels for safety-critical systems.",
      "D": "Code-related white-box test techniques provide an objective measure of coverage and can be used to complement black-box test techniques to increase confidence in the code."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Code-related white-box test techniques provide an objective measure of coverage and can be used to complement black-box test techniques to increase confidence in the code.",
    "question_vi": "Câu nào sau đây về kỹ thuật kiểm thử hộp trắng là đúng?",
    "options_vi": {
      "A": "Đạt được mức độ bao phủ toàn bộ câu lệnh và mức độ bao phủ toàn bộ chi nhánh cho một sản phẩm phần mềm có nghĩa là sản phẩm phần mềm đó đã được kiểm tra đầy đủ và không còn lỗi nào trong mã.",
      "B": "Các kỹ thuật kiểm thử hộp trắng liên quan đến mã không cần thiết để đo độ bao phủ mã thực tế đạt được bằng thử nghiệm hộp đen, vì độ bao phủ mã có thể được đo bằng cách sử dụng các tiêu chí bao phủ liên quan đến kỹ thuật kiểm thử hộp đen.",
      "C": "Phạm vi chi nhánh là kỹ thuật kiểm tra hộp trắng liên quan đến mã kỹ lưỡng nhất và do đó, các tiêu chuẩn hiện hành quy định việc đạt được phạm vi chi nhánh đầy đủ ở mức an toàn cao nhất cho các hệ thống quan trọng về an toàn.",
      "D": "Các kỹ thuật kiểm tra hộp trắng liên quan đến mã cung cấp thước đo khách quan về mức độ bao phủ và có thể được sử dụng để bổ sung cho các kỹ thuật kiểm tra hộp đen nhằm tăng độ tin cậy của mã."
    },
    "explanation_vi": "Đáp án đúng là D: Các kỹ thuật kiểm tra hộp trắng liên quan đến mã cung cấp thước đo khách quan về mức độ bao phủ và có thể được sử dụng để bổ sung cho các kỹ thuật kiểm tra hộp đen nhằm tăng độ tin cậy của mã."
  },
  {
    "id": 225,
    "topic": "Exam A",
    "question": "Which of the following statements about error guessing is true?",
    "options": {
      "A": "Error guessing is a system that adopts artificial intelligence to predict whether software components are likely to contain defects or not.",
      "B": "Experienced testers, when applying error guessing, rely on the use of a high-level list of what needs to be tested as a guide to find defects.",
      "C": "Error guessing refers to the ability of a system or component to continue normal operation despite the presence of erroneous inputs.",
      "D": "Experienced testers, when applying error guessing technique, can anticipate where errors, defects and failures have occurred and target their tests at those issues."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Experienced testers, when applying error guessing technique, can anticipate where errors, defects and failures have occurred and target their tests at those issues.",
    "question_vi": "Câu nào sau đây về việc đoán lỗi là đúng?",
    "options_vi": {
      "A": "Đoán lỗi là một hệ thống sử dụng trí tuệ nhân tạo để dự đoán liệu các thành phần phần mềm có khả năng chứa lỗi hay không.",
      "B": "Những người kiểm thử có kinh nghiệm, khi áp dụng tính năng đoán lỗi, hãy dựa vào việc sử dụng danh sách cấp cao về những gì cần kiểm thử làm hướng dẫn để tìm ra lỗi.",
      "C": "Đoán lỗi đề cập đến khả năng một hệ thống hoặc thành phần tiếp tục hoạt động bình thường mặc dù có đầu vào sai.",
      "D": "Những người kiểm thử có kinh nghiệm, khi áp dụng kỹ thuật đoán lỗi, có thể đoán trước được lỗi, khiếm khuyết và lỗi đã xảy ra ở đâu và nhắm mục tiêu kiểm thử của họ vào những vấn đề đó."
    },
    "explanation_vi": "Đáp án đúng là D: Những người kiểm thử có kinh nghiệm khi áp dụng kỹ thuật đoán lỗi có thể đoán trước được lỗi, khiếm khuyết và lỗi đã xảy ra ở đâu và nhắm mục tiêu kiểm thử của họ vào những vấn đề đó."
  },
  {
    "id": 226,
    "topic": "Exam A",
    "question": "Which of the following statements about exploratory testing is true?",
    "options": {
      "A": "Exploratory testing is an experience-based test technique in which testers explore the requirements specification to detect non testable requirements.",
      "B": "When exploratory testing is conducted following a session-based approach, the issues detected by the testers can be documented in session sheets.",
      "C": "Exploratory testing is an experience-based test technique used by testers during informal code reviews to find defects by exploring the source code.",
      "D": "In exploratory testing, testers usually produce scripted tests and establish bidirectional traceability between these tests and the items of the test basis."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: When exploratory testing is conducted following a session-based approach, the issues detected by the testers can be documented in session sheets.",
    "question_vi": "Câu nào sau đây về thử nghiệm thăm dò là đúng?",
    "options_vi": {
      "A": "Kiểm thử thăm dò là một kỹ thuật kiểm thử dựa trên kinh nghiệm, trong đó người kiểm thử khám phá đặc tả yêu cầu để phát hiện các yêu cầu không thể kiểm thử được.",
      "B": "Khi thử nghiệm thăm dò được tiến hành theo cách tiếp cận dựa trên phiên, các vấn đề được người kiểm tra phát hiện có thể được ghi lại trong bảng phiên.",
      "C": "Kiểm thử thăm dò là một kỹ thuật kiểm thử dựa trên kinh nghiệm được người kiểm thử sử dụng trong quá trình đánh giá mã không chính thức để tìm ra lỗi bằng cách khám phá mã nguồn.",
      "D": "Trong thử nghiệm thăm dò, người thử nghiệm thường tạo ra các thử nghiệm theo kịch bản và thiết lập khả năng truy xuất nguồn gốc hai chiều giữa các thử nghiệm này và các mục của cơ sở thử nghiệm."
    },
    "explanation_vi": "Đáp án đúng là B: Khi thử nghiệm thăm dò được tiến hành theo cách tiếp cận dựa trên phiên, các vấn đề được người kiểm tra phát hiện có thể được ghi lại trong các bảng phiên."
  },
  {
    "id": 227,
    "topic": "Exam A",
    "question": "The acceptance criteria associated with a user story:",
    "options": {
      "A": "are often written in a rule-oriented format using the template referred to as “Given/When/Then”.",
      "B": "are often documented following in rule-oriented format using the following template: “As a [role], I want [feature], so that I can [benefit]”.",
      "C": "can be written in different formats and represent an aspect of a user story referred to as ‘confirmation’ of the so called “3 C’s”.",
      "D": "must be written in one of the two following formats: scenario-oriented or rule-oriented."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: can be written in different formats and represent an aspect of a user story referred to as ‘confirmation’ of the so called “3 C’s”.",
    "question_vi": "Tiêu chí chấp nhận liên quan đến câu chuyện của người dùng:",
    "options_vi": {
      "A": "thường được viết theo định dạng hướng đến quy tắc sử dụng mẫu được gọi là “Cho/Khi/Sau đó”.",
      "B": "thường được ghi lại ở định dạng hướng đến quy tắc bằng cách sử dụng mẫu sau: “Là một [vai trò], tôi muốn [tính năng], để tôi có thể [lợi ích]”.",
      "C": "có thể được viết ở các định dạng khác nhau và thể hiện một khía cạnh của câu chuyện của người dùng được gọi là 'xác nhận' của cái gọi là “3 C”.",
      "D": "phải được viết theo một trong hai định dạng sau: hướng theo kịch bản hoặc hướng theo quy tắc."
    },
    "explanation_vi": "Đáp án đúng là C: có thể được viết dưới nhiều định dạng khác nhau và thể hiện một khía cạnh của câu chuyện của người dùng được gọi là 'xác nhận' của cái gọi là “3 C”."
  },
  {
    "id": 228,
    "topic": "Exam A",
    "question": "The following rules determine the annual bonus to be paid to a salesman of a company based on the total annual amount of the sales made (referred to as TAS). If the TAS is between 50k€ and 80k€, the bonus is 10%. If the TAS exceeds 80k€ by a value not greater than 40k€, the bonus is 15%. Finally, if the TAS exceeds the maximum threshold which entitles to a 15% bonus, the bonus is 22%. Consider applying equivalence partitioning to the TAS (Note: 1k€ = 1000 euros). Which one of the following answers contain only test cases that belong to the same equivalence partition?",
    "options": {
      "A": "TC1 = 81k€; TC2= 97k€; TC3=111k€; TC4=118k€",
      "B": "TC1 = 40k€; TC2= 46k€; TC3=51k€; TC4=53k€",
      "C": "TC1 = 79k€; TC2= 80k€; TC3=81k€; TC4=82k€",
      "D": "TC1 = 90k€; TC2= 110k€; TC3=125k€; TC4=140k€"
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: TC1 = 81k€; TC2= 97k€; TC3=111k€; TC4=118k€",
    "question_vi": "Các quy tắc sau đây xác định tiền thưởng hàng năm được trả cho nhân viên bán hàng của một công ty dựa trên tổng doanh số bán hàng hàng năm (gọi tắt là TAS). Nếu TAS nằm trong khoảng từ 50k€ đến 80k€, tiền thưởng là 10%. Nếu TAS vượt quá 80k€ với giá trị không lớn hơn 40k€, tiền thưởng là 15%. Cuối cùng, nếu TAS vượt quá ngưỡng tối đa được hưởng tiền thưởng 15% thì tiền thưởng là 22%. Xem xét áp dụng phân vùng tương đương cho TAS (Lưu ý: 1k€ = 1000 euro). Câu trả lời nào sau đây chỉ chứa các trường hợp thử nghiệm thuộc cùng một phân vùng tương đương?",
    "options_vi": {
      "A": "TC1 = 81k€; TC2= 97k€; TC3=111k€; TC4=118k€",
      "B": "TC1 = 40k€; TC2= 46k€; TC3=51k€; TC4=53k€",
      "C": "TC1 = 79k€; TC2= 80k€; TC3=81k€; TC4=82k€",
      "D": "TC1 = 90k€; TC2= 110k€; TC3=125k€; TC4=140k€"
    },
    "explanation_vi": "Câu trả lời đúng là A: TC1 = 81k€; TC2= 97k€; TC3=111k€; TC4=118k€"
  },
  {
    "id": 229,
    "topic": "Exam A",
    "question": "An alphanumeric password must be between 4 and 7 characters long and must contain at least one numeric character, one capital (uppercase) letter and one lowercase letter of the alphabet. Which one of the following sets of test cases represents the correct outcome of a two-value boundary value analysis applied to the password length? (Note: test cases are separated by a semicolon)",
    "options": {
      "A": "1xA; aB11; Pq1ZZab; 7iDD0a1x",
      "B": "aB11; 99rSp; 5NnN10; 7iDD0a1x",
      "C": "1xB; aB11; 99rSp; 5NnN10; 4NnN10T; 44ghWn19",
      "D": "1RhT; rSp53; 3N3e10; 8sBc1by"
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: 1RhT; rSp53; 3N3e10; 8sBc1by",
    "question_vi": "Mật khẩu chữ và số phải dài từ 4 đến 7 ký tự và phải chứa ít nhất một ký tự số, một chữ in hoa (chữ hoa) và một chữ cái viết thường trong bảng chữ cái. Bộ trường hợp kiểm thử nào sau đây thể hiện kết quả chính xác của phân tích giá trị biên hai giá trị được áp dụng cho độ dài mật khẩu? (Lưu ý: các trường hợp thử nghiệm được phân tách bằng dấu chấm phẩy)",
    "options_vi": {
      "A": "1xA; aB11; Pq1ZZab; 7iDD0a1x",
      "B": "aB11; 99rSp; 5NnN10; 7iDD0a1x",
      "C": "1xB; aB11; 99rSp; 5NnN10; 4NnN10T; 44ghWn19",
      "D": "1RhT; rSp53; 3N3e10; 8sBc1bởi"
    },
    "explanation_vi": "Câu trả lời đúng là D: 1RhT; rSp53; 3N3e10; 8sBc1bởi"
  },
  {
    "id": 230,
    "topic": "Exam A",
    "question": "A company wants to reward each of its salespeople with an annual bonus that represents the sum of all the bonuses accumulated for every single sale made by that salesperson. The bonus for a single sale can take on the following four values: 3%, 5%, 7% and 10% (the percentage refers to the amount of the single sale). These values are determined on the basis of the type of customer (classified as “Basic” or “Premium”) to which such sale was made, and on the amount of such sale classified into the following three groups G1, G2 and G3: [G]: less than 300 euros. [G2]: between 300 and 2000 euros. [G3]: greater than 2000 euros. Which of the following is the minimum number of test cases needed to cover the full decision table associated with this scenario?",
    "options": {
      "A": "12.",
      "B": "6.",
      "C": "4.",
      "D": "3."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: 6.",
    "question_vi": "Một công ty muốn thưởng cho mỗi nhân viên bán hàng của mình một khoản tiền thưởng hàng năm bằng tổng số tiền thưởng được tích lũy cho mỗi lần bán hàng của nhân viên bán hàng đó. Tiền thưởng cho một lần bán hàng có thể có bốn giá trị sau: 3%, 5%, 7% và 10% (tỷ lệ phần trăm đề cập đến số tiền của một lần bán hàng). Các giá trị này được xác định dựa trên loại khách hàng (được phân loại là “Cơ bản” hoặc “Cao cấp”) mà giao dịch bán đó được thực hiện và dựa trên số lượng giao dịch bán đó được phân loại thành ba nhóm sau G1, G2 và G3: [G]: dưới 300 euro. [G2]: từ 300 đến 2000 euro. [G3]: lớn hơn 2000 euro. Điều nào sau đây là số lượng ca kiểm thử tối thiểu cần thiết để bao quát toàn bộ bảng quyết định liên quan đến kịch bản này?",
    "options_vi": {
      "A": "12.",
      "B": "6.",
      "C": "4.",
      "D": "3."
    },
    "explanation_vi": "Đáp án đúng là B: 6."
  },
  {
    "id": 231,
    "topic": "Exam A",
    "question": "The following simplified version of a state transition diagram specifies the behaviour of a video poker game: What is the minimum number of test cases needed to cover every unique sequence of up to 3 states/2 transitions starting in the “Start” state and ending in the “End” state?",
    "options": {
      "A": "1.",
      "B": "2.",
      "C": "3.",
      "D": "4."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: 3.",
    "question_vi": "Phiên bản đơn giản hóa sau đây của sơ đồ chuyển đổi trạng thái chỉ định hoạt động của trò chơi poker video: Số trường hợp thử nghiệm tối thiểu cần thiết để bao gồm mỗi chuỗi duy nhất có tối đa 3 trạng thái/2 lần chuyển đổi bắt đầu ở trạng thái “Bắt đầu” và kết thúc ở trạng thái “Kết thúc” là bao nhiêu?",
    "options_vi": {
      "A": "1.",
      "B": "2.",
      "C": "3.",
      "D": "4."
    },
    "explanation_vi": "Câu trả lời đúng là C: 3."
  },
  {
    "id": 232,
    "topic": "Exam A",
    "question": "Consider the following user story about the authentication functionality of an e-commerce website: “As a logged-in user, I want to change my current password with a new one, so that I can make my account safer”. The following are some of the acceptance criteria defined for the user story: [a] After the logged-in user has successfully changed his password, an e-mail confirming the change must be sent to him. [b] To successfully change the password, the logged-in user must enter the current password, enter a new valid password, and finally confirm by pressing the ‘Change Password’ button. [c] To be valid, the new password entered by the logged-in user is not only required to meet the criteria related to the length and type of characters, but must also be different from the last 5 passwords of that user. [d] A dedicated error message must be presented to the logged-in user when he enters a wrong current password. [e] A dedicated error message must be presented to the logged-in user when he enters the correct current password, but enters an invalid password. Based only on the given information, which of the following ATDD tests is most likely to be written first?",
    "options": {
      "A": "The logged-in user enters a wrong current password and views the dedicated error message.",
      "B": "The logged-in user enters the correct current password, enters a valid new password (different from the last 5 passwords), presses the ‘Change Password’ button, and finally receives the e-mail confirming that the password has been successfully changed.",
      "C": "The logged-in user enters the correct current password, enters an invalid password, and finally views the dedicated error.",
      "D": "The logged-in user submits a purchase order containing ten items, selects to pay with a Visa credit card, enters credit card information of a valid card, presses the ‘Confirm’ button, and finally views the dedicated message confirming that the purchase has been successful."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: The logged-in user enters the correct current password, enters a valid new password (different from the last 5 passwords), presses the ‘Change Password’ button, and finally receives the e-mail confirming that the password has been successfully changed.",
    "question_vi": "Consider the following user story about the authentication functionality of an e-commerce website: “As a logged-in user, I want to change my current password with a new one, so that I can make my account safer”. Sau đây là một số tiêu chí chấp nhận được xác định cho câu chuyện của người dùng: [a] Sau khi người dùng đăng nhập thay đổi mật khẩu thành công, một e-mail xác nhận thay đổi phải được gửi cho anh ta. [b] Để thay đổi mật khẩu thành công, người dùng đã đăng nhập phải nhập mật khẩu hiện tại, nhập mật khẩu hợp lệ mới và cuối cùng xác nhận bằng cách nhấn nút 'Thay đổi mật khẩu'. [c] Để hợp lệ, mật khẩu mới do người dùng đăng nhập nhập không chỉ phải đáp ứng các tiêu chí liên quan đến độ dài và loại ký tự mà còn phải khác với 5 mật khẩu cuối cùng của người dùng đó. [d] Một thông báo lỗi chuyên dụng phải được hiển thị cho người dùng đã đăng nhập khi anh ta nhập sai mật khẩu hiện tại. [e] Một thông báo lỗi chuyên dụng phải được hiển thị cho người dùng đã đăng nhập khi anh ta nhập đúng mật khẩu hiện tại nhưng lại nhập mật khẩu không hợp lệ. Chỉ dựa trên thông tin đã cho, bài kiểm tra ATDD nào sau đây có nhiều khả năng được viết đầu tiên nhất?",
    "options_vi": {
      "A": "Người dùng đã đăng nhập nhập sai mật khẩu hiện tại và xem thông báo lỗi chuyên dụng.",
      "B": "Người dùng đã đăng nhập nhập đúng mật khẩu hiện tại, nhập mật khẩu mới hợp lệ (khác với 5 mật khẩu gần đây nhất), nhấn nút ‘Thay đổi mật khẩu’ và cuối cùng nhận được e-mail xác nhận rằng mật khẩu đã được thay đổi thành công.",
      "C": "Người dùng đã đăng nhập nhập đúng mật khẩu hiện tại, nhập mật khẩu không hợp lệ và cuối cùng xem lỗi chuyên dụng.",
      "D": "Người dùng đã đăng nhập gửi đơn đặt hàng gồm 10 mặt hàng, chọn thanh toán bằng thẻ tín dụng Visa, nhập thông tin thẻ tín dụng của thẻ hợp lệ, nhấn nút 'Xác nhận' và cuối cùng xem thông báo chuyên dụng xác nhận rằng giao dịch mua đã thành công."
    },
    "explanation_vi": "Đáp án đúng là B: Người dùng đăng nhập nhập đúng mật khẩu hiện tại, nhập mật khẩu mới hợp lệ (khác với 5 mật khẩu gần nhất), nhấn nút ‘Đổi mật khẩu’ và cuối cùng nhận được email xác nhận rằng mật khẩu đã được đổi thành công."
  },
  {
    "id": 233,
    "topic": "Exam A",
    "question": "The tests at the bottom layer of the test pyramid:",
    "options": {
      "A": "generally run faster than the tests at the top layer of the pyramid.",
      "B": "cover larger pieces of functionalities than the tests at the top layer of the pyramid.",
      "C": "are defined as ‘UI tests’ or ‘end-to-end tests’ in the different models of the pyramid.",
      "D": "are unscripted tests produced by experience-based test techniques."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: generally run faster than the tests at the top layer of the pyramid.",
    "question_vi": "Các thử nghiệm ở lớp dưới cùng của kim tự tháp thử nghiệm:",
    "options_vi": {
      "A": "thường chạy nhanh hơn các bài kiểm tra ở lớp trên cùng của kim tự tháp.",
      "B": "bao gồm các phần chức năng lớn hơn các thử nghiệm ở lớp trên cùng của kim tự tháp.",
      "C": "được định nghĩa là 'kiểm tra giao diện người dùng' hoặc 'kiểm tra từ đầu đến cuối' trong các mô hình khác nhau của kim tự tháp.",
      "D": "là các bài kiểm tra không có kịch bản được tạo ra bởi các kỹ thuật kiểm tra dựa trên kinh nghiệm."
    },
    "explanation_vi": "Đáp án đúng là A: thường chạy nhanh hơn các bài kiểm tra ở lớp trên cùng của kim tự tháp."
  },
  {
    "id": 234,
    "topic": "Exam A",
    "question": "Consider a given test plan which, among others, contains the following three sections: “Test Scope”, “Testing Communication”, and “Stakeholders”. The features of the test object to be tested and those excluded from the testing represent information that is:",
    "options": {
      "A": "not usually included in a test plan, and therefore in the given test plan it should not be specified neither within the three sections mentioned, nor within the others.",
      "B": "usually included in a test plan and, in the given test plan, it is more likely to be specified within “Test Scope” rather than in the other two sections mentioned.",
      "C": "usually included in a test plan and, in the given test plan, it is more likely to be specified within “Testing Communication” rather than in the other two sections mentioned.",
      "D": "usually included in a test plan and, in the given test plan, it is more likely to be specified within “Stakeholders” rather than in the other two sections mentioned."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: usually included in a test plan and, in the given test plan, it is more likely to be specified within “Test Scope” rather than in the other two sections mentioned.",
    "question_vi": "Hãy xem xét một kế hoạch kiểm tra nhất định, trong số những phần khác, có ba phần sau: “Phạm vi kiểm tra”, “Giao tiếp kiểm tra” và “Các bên liên quan”. Các tính năng của đối tượng thử nghiệm được thử nghiệm và những tính năng bị loại khỏi thử nghiệm thể hiện thông tin:",
    "options_vi": {
      "A": "thường không được bao gồm trong kế hoạch kiểm tra, và do đó trong kế hoạch kiểm tra nhất định, nó không được chỉ định trong ba phần được đề cập cũng như trong các phần khác.",
      "B": "thường được bao gồm trong một kế hoạch kiểm tra và trong kế hoạch kiểm tra nhất định, nó có nhiều khả năng được chỉ định trong “Phạm vi kiểm tra” hơn là trong hai phần còn lại được đề cập.",
      "C": "thường được bao gồm trong một kế hoạch kiểm tra và trong kế hoạch kiểm tra nhất định, nó có nhiều khả năng được chỉ định trong “Truyền thông kiểm tra” hơn là trong hai phần còn lại được đề cập.",
      "D": "thường được bao gồm trong một kế hoạch kiểm tra và trong kế hoạch kiểm tra nhất định, nó có nhiều khả năng được chỉ định trong “Các bên liên quan” hơn là trong hai phần còn lại được đề cập."
    },
    "explanation_vi": "Đáp án đúng là B: thường được bao gồm trong một kế hoạch kiểm tra và trong kế hoạch kiểm tra nhất định, nó có nhiều khả năng được chỉ định trong “Phạm vi kiểm tra” hơn là trong hai phần còn lại được đề cập."
  },
  {
    "id": 235,
    "topic": "Exam A",
    "question": "In a two-hour uninterrupted test session, performed as part of an iteration on an Agile project, a heuristic checklist was used to help the tester focus on some specific usability issues of a web application. The unscripted tests produced by the tester’s experience during such a session belong to which one of the following testing quadrants?",
    "options": {
      "A": "Q1.",
      "B": "Q2.",
      "C": "Q3.",
      "D": "Q4."
    },
    "answer": "C",
    "explanation": "Đáp án đúng là C: Q3.",
    "question_vi": "Trong phiên thử nghiệm kéo dài hai giờ không gián đoạn, được thực hiện như một phần của quá trình lặp lại trong dự án Agile, danh sách kiểm tra theo kinh nghiệm đã được sử dụng để giúp người thử nghiệm tập trung vào một số vấn đề cụ thể về khả năng sử dụng của ứng dụng web. Các bài kiểm tra không có kịch bản được tạo ra bởi trải nghiệm của người kiểm tra trong một phiên như vậy thuộc về một trong các góc phần tư kiểm thử sau đây?",
    "options_vi": {
      "A": "Q1.",
      "B": "Q2.",
      "C": "Q3.",
      "D": "Q4."
    },
    "explanation_vi": "Đáp án đúng là C: Q3."
  },
  {
    "id": 236,
    "topic": "Exam A",
    "question": "Consider the following examples of risks identified in different software development projects: [I]. The contrast colour ratio for both normal text and large text of a website does not comply with the applicable accessibility guidelines, making it difficult for many users to read the content on the pages. [II]. A development vendor fails to deliver their software system on time, causing significant delays to system integration testing activities that have been planned as part of a development project for a system of systems. [III]. People in the test team do not have sufficient skills to automate tests at the test levels required by the test automation strategy which does not allow production of an effective regression test suite. [IV]. In a web application, data from untrusted sources is not subject to proper input validation, making the application vulnerable to several security attacks. Which of the following statements is true?",
    "options": {
      "A": "[I] and [III] are product risks; [II] and [IV] are project risks.",
      "B": "[I] and [IV] are product risks, [II] and [III] are project risks.",
      "C": "[II], [III] and [IV] are product risks; [I] is a project risk.",
      "D": "[IV] is a product risk; [I], [II] and [III] are project risks."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: [I] and [IV] are product risks, [II] and [III] are project risks.",
    "question_vi": "Hãy xem xét các ví dụ sau về rủi ro được xác định trong các dự án phát triển phần mềm khác nhau: [I]. Tỷ lệ màu tương phản cho cả văn bản thông thường và văn bản lớn của trang web không tuân thủ các nguyên tắc trợ năng hiện hành, khiến nhiều người dùng khó đọc nội dung trên trang. [II]. Nhà cung cấp phát triển không cung cấp hệ thống phần mềm của họ đúng thời hạn, gây ra sự chậm trễ đáng kể cho các hoạt động thử nghiệm tích hợp hệ thống đã được lên kế hoạch như một phần của dự án phát triển hệ thống của các hệ thống. [III]. Những người trong nhóm thử nghiệm không có đủ kỹ năng để tự động hóa các thử nghiệm ở các cấp độ thử nghiệm theo yêu cầu của chiến lược tự động hóa thử nghiệm, điều này không cho phép tạo ra một bộ thử nghiệm hồi quy hiệu quả. [IV]. Trong ứng dụng web, dữ liệu từ các nguồn không đáng tin cậy không được xác thực đầu vào phù hợp, khiến ứng dụng dễ bị tấn công bảo mật. Phát biểu nào sau đây là đúng?",
    "options_vi": {
      "A": "[I] và [III] là rủi ro sản phẩm; [II] và [IV] là rủi ro của dự án.",
      "B": "[I] và [IV] là rủi ro sản phẩm, [II] và [III] là rủi ro dự án.",
      "C": "[II], [III] và [IV] là rủi ro sản phẩm; [I] là một rủi ro của dự án.",
      "D": "[IV] là rủi ro sản phẩm; [I], [II] và [III] là những rủi ro của dự án."
    },
    "explanation_vi": "Câu trả lời đúng là B: [I] và [IV] là rủi ro sản phẩm, [II] và [III] là rủi ro dự án."
  },
  {
    "id": 237,
    "topic": "Exam A",
    "question": "Which of the following is not an example of a typical content of a test completion report for a test project?",
    "options": {
      "A": "The additional effort spent on test execution compared to what was planned.",
      "B": "The unexpected test environment downtime that resulted in slower test execution.",
      "C": "The residual risk level if a risk-based test approach was adopted.",
      "D": "The test procedures of all test cases that have been executed."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: The test procedures of all test cases that have been executed.",
    "question_vi": "Điều nào sau đây không phải là ví dụ về nội dung điển hình của báo cáo hoàn thành thử nghiệm cho một dự án thử nghiệm?",
    "options_vi": {
      "A": "Nỗ lực bổ sung dành cho việc thực hiện kiểm thử so với những gì đã được lên kế hoạch.",
      "B": "Thời gian ngừng hoạt động của môi trường thử nghiệm không mong muốn dẫn đến việc thực hiện thử nghiệm chậm hơn.",
      "C": "Mức rủi ro còn lại nếu phương pháp thử nghiệm dựa trên rủi ro được áp dụng.",
      "D": "Các thủ tục kiểm tra của tất cả các trường hợp kiểm tra đã được thực hiện."
    },
    "explanation_vi": "Đáp án đúng là D: Quy trình kiểm thử của tất cả các ca kiểm thử đã được thực hiện."
  },
  {
    "id": 238,
    "topic": "Exam A",
    "question": "Which of the following statements best describes how configuration management supports testing?",
    "options": {
      "A": "Configuration management helps reduce testing effort by identifying a manageable number of test environment configurations in which to test the software, out of all possible configurations of the environment in which the software will be released.",
      "B": "Configuration management is an administrative discipline that includes change control, which is the process of controlling the changes to identified items referred to as ‘Configuration Items’.",
      "C": "Configuration management is an approach to interoperability testing where tests are executed in the cloud, as the cloud can provide cost-effective access to multiple configurations of the test environments.",
      "D": "Configuration management helps ensure that all relevant project documentation and software items are uniquely identified in all their versions and therefore can be unambiguously referenced in test documentation."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: Configuration management helps ensure that all relevant project documentation and software items are uniquely identified in all their versions and therefore can be unambiguously referenced in test documentation.",
    "question_vi": "Câu nào sau đây mô tả đúng nhất cách quản lý cấu hình hỗ trợ thử nghiệm?",
    "options_vi": {
      "A": "Quản lý cấu hình giúp giảm nỗ lực kiểm tra bằng cách xác định số lượng cấu hình môi trường kiểm tra có thể quản lý để kiểm tra phần mềm, trong số tất cả các cấu hình có thể có của môi trường mà phần mềm sẽ được phát hành.",
      "B": "Quản lý cấu hình là một quy tắc hành chính bao gồm kiểm soát thay đổi, là quá trình kiểm soát các thay đổi đối với các mục được xác định được gọi là 'Mục Cấu hình'.",
      "C": "Quản lý cấu hình là một cách tiếp cận để kiểm tra khả năng tương tác trong đó các thử nghiệm được thực hiện trên đám mây, vì đám mây có thể cung cấp quyền truy cập hiệu quả về mặt chi phí vào nhiều cấu hình của môi trường thử nghiệm.",
      "D": "Quản lý cấu hình giúp đảm bảo rằng tất cả tài liệu dự án và các mục phần mềm có liên quan đều được xác định duy nhất trong tất cả các phiên bản của chúng và do đó có thể được tham chiếu rõ ràng trong tài liệu kiểm thử."
    },
    "explanation_vi": "Đáp án đúng là D: Quản lý cấu hình giúp đảm bảo rằng tất cả tài liệu dự án và các mục phần mềm có liên quan được xác định duy nhất trong tất cả các phiên bản của chúng và do đó có thể được tham chiếu rõ ràng trong tài liệu kiểm tra."
  },
  {
    "id": 239,
    "topic": "Exam A",
    "question": "For each of the test cases to be executed, the following table specifies the priority order and dependencies on other test cases. Which of the following test execution schedules is compatible with the logical dependencies and allows executing the test cases in priority order?",
    "options": {
      "A": "TC4, TCЗ, TC2, TC6, TC5, TC1.",
      "B": "TC4, TC6, TCЗ, TC2, TC5, TC1.",
      "C": "TCЗ, TC5, TC6, TC1, TC4, TCЗ.",
      "D": "TC4, TCЗ, TC2, TC6, TC1, TC5."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: TC4, TCЗ, TC2, TC6, TC5, TC1.",
    "question_vi": "Đối với mỗi trường hợp kiểm thử được thực thi, bảng sau chỉ định thứ tự ưu tiên và sự phụ thuộc vào các trường hợp kiểm thử khác. Lịch trình thực hiện kiểm thử nào sau đây tương thích với các phụ thuộc logic và cho phép thực hiện các trường hợp kiểm thử theo thứ tự ưu tiên?",
    "options_vi": {
      "A": "TC4, TCЗ, TC2, TC6, TC5, TC1.",
      "B": "TC4, TC6, TCЗ, TC2, TC5, TC1.",
      "C": "TCЗ, TC5, TC6, TC1, TC4, TCЗ.",
      "D": "TC4, TCЗ, TC2, TC6, TC1, TC5."
    },
    "explanation_vi": "Câu trả lời đúng là A: TC4, TCЗ, TC2, TC6, TC5, TC1."
  },
  {
    "id": 240,
    "topic": "Exam A",
    "question": "A new web app aims at offering a rich user experience. As a functional tester, you have run some functional tests to verify that, before releasing the app, such app works correctly on several mobile devices, all of which are listed as supported devices within the requirements specification. These tests were performed on stable and isolated test environments where you were the only user interacting with the application. All tests passed, but in some of those tests you observed the following issue: on some mobile devices only, the response time for two web pages containing images was extremely slow. Based only on the given information, which of the following recommendations would you follow?",
    "options": {
      "A": "You should open a defect report providing detailed information on which devices and by running which tests you observed the issue.",
      "B": "The issue is related to performance efficiency, not functionality. Thus, as a functional tester, you should not open any defect report as all the functional tests passed.",
      "C": "You should not open any defect report as the problem is most likely due to poor hardware equipment on the devices where you observed the issue.",
      "D": "You should not open any defect report and inform the test manager that the devices on which you observed the issue should no longer be supported so that they will be removed from the requirements specification."
    },
    "answer": "A",
    "explanation": "Đáp án đúng là A: You should open a defect report providing detailed information on which devices and by running which tests you observed the issue.",
    "question_vi": "Một ứng dụng web mới nhằm mục đích cung cấp trải nghiệm phong phú cho người dùng. Với tư cách là người kiểm tra chức năng, bạn đã chạy một số thử nghiệm chức năng để xác minh rằng trước khi phát hành ứng dụng, ứng dụng đó hoạt động chính xác trên một số thiết bị di động, tất cả đều được liệt kê là thiết bị được hỗ trợ trong đặc tả yêu cầu. Các thử nghiệm này được thực hiện trên môi trường thử nghiệm ổn định và tách biệt, nơi bạn là người dùng duy nhất tương tác với ứng dụng. Tất cả các thử nghiệm đều đạt, nhưng trong một số thử nghiệm đó, bạn đã quan sát thấy vấn đề sau: chỉ trên một số thiết bị di động, thời gian phản hồi cho hai trang web chứa hình ảnh cực kỳ chậm. Chỉ dựa trên thông tin đã cho, bạn sẽ làm theo đề xuất nào sau đây?",
    "options_vi": {
      "A": "Bạn nên mở một báo cáo lỗi cung cấp thông tin chi tiết về thiết bị nào và bằng cách chạy thử nghiệm nào mà bạn đã quan sát thấy sự cố.",
      "B": "Vấn đề liên quan đến hiệu quả hoạt động chứ không phải chức năng. Vì vậy, với tư cách là người kiểm tra chức năng, bạn không nên mở bất kỳ báo cáo lỗi nào vì tất cả các bài kiểm tra chức năng đều đã vượt qua.",
      "C": "Bạn không nên mở bất kỳ báo cáo lỗi nào vì sự cố rất có thể là do thiết bị phần cứng kém trên thiết bị mà bạn quan sát thấy sự cố.",
      "D": "Bạn không nên mở bất kỳ báo cáo lỗi nào và thông báo cho người quản lý kiểm tra rằng các thiết bị mà bạn quan sát thấy sự cố sẽ không còn được hỗ trợ nữa nên chúng sẽ bị xóa khỏi đặc tả yêu cầu."
    },
    "explanation_vi": "Đáp án đúng là A: Bạn nên mở một báo cáo lỗi cung cấp thông tin chi tiết về thiết bị nào và bằng cách chạy thử nghiệm nào bạn đã quan sát thấy sự cố."
  },
  {
    "id": 241,
    "topic": "Exam A",
    "question": "Test automation allows you to:",
    "options": {
      "A": "demonstrate the absence of defects.",
      "B": "produce tests that are less subject to human errors.",
      "C": "avoid performing exploratory testing.",
      "D": "increase test process efficiency by facilitating management of defects."
    },
    "answer": "B",
    "explanation": "Đáp án đúng là B: produce tests that are less subject to human errors.",
    "question_vi": "Tự động hóa thử nghiệm cho phép bạn:",
    "options_vi": {
      "A": "chứng minh sự vắng mặt của khuyết tật.",
      "B": "tạo ra các thử nghiệm ít có lỗi của con người hơn.",
      "C": "tránh thực hiện thử nghiệm thăm dò.",
      "D": "tăng hiệu quả quá trình kiểm tra bằng cách tạo điều kiện quản lý các lỗi."
    },
    "explanation_vi": "Đáp án đúng là B: tạo ra các bài kiểm tra ít xảy ra lỗi do con người hơn."
  },
  {
    "id": 242,
    "topic": "Exam A",
    "question": "A typical test objective is to ensure that:",
    "options": {
      "A": "testing is used to drive the development of a software.",
      "B": "a test object is tested using a combination of test techniques.",
      "C": "there are no defects in a test object that is about to be released.",
      "D": "a test object is covered as required."
    },
    "answer": "D",
    "explanation": "Đáp án đúng là D: a test object is covered as required.",
    "question_vi": "Mục tiêu thử nghiệm điển hình là để đảm bảo rằng:",
    "options_vi": {
      "A": "thử nghiệm được sử dụng để thúc đẩy sự phát triển của một phần mềm.",
      "B": "một đối tượng thử nghiệm được thử nghiệm bằng cách sử dụng kết hợp các kỹ thuật thử nghiệm.",
      "C": "không có khiếm khuyết nào trong đối tượng thử nghiệm sắp được phát hành.",
      "D": "một đối tượng thử nghiệm được bao phủ theo yêu cầu."
    },
    "explanation_vi": "Đáp án đúng là D: đối tượng thử nghiệm được bao phủ theo yêu cầu."
  }
];
