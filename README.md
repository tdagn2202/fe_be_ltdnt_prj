```!!!FOR BACK-END DEVELOPER - PHAM HUU HUNG```

```FUNCTIONALITY DOCUMENTATION```

Văn bản này liệt kê vị trí các phím chức năng của giao diện:


```1 - LOGIN PAGE: 2 buttons (CHỖ NÀY LÀ TÍNH NĂNG ĐĂNG NHẬP, TRUY VẤN DATABASE)```
```diff
1. Login:
!Link to code: ../app/index.tsx
- Dòng 34 - 38, nằm trong TouachableOpacity

2. Sign up for a free account
!Link to file: ../app/
- Dòng 47 - 51, nằm trong TouachableOpacity
```

```diff 2 - TABS
Sau khi click vào nút LOGIN, thì sẽ dẫn tới các files trong thư mục (tabs) (do dùng navigation nên cần chia riêng tụi nó ra một file). 

Trong đám đó, chỉ quan tâm tới file: user.tsx

Trong màn hình User, có các Buttons:
+ Account Setting:
!Link to file: ../app/(tabs)/user.tsx
- Dòng 59 - 69, bên trong TouachableOpacity
-     | --> Change name
-     | --> Change avatar
+     | --> Change password (chỉ quan tâm button này)
!Link to file: ../app/userSetting.tsx
- Dòng 63 - 67, bên trong TouachableOpacity

+ Logout (đăng xuất về trang login)
!Link to file: ../app/(tabs)/user.tsx
- Chưa code =))))) 
```

```diff 3 - CHANGE PASSWORD
Click vào Change password --> Changing password page
Trong màn hình changing password có 2 buttons: 

+ Change my password: 
!Link to file: ../app/changePassword.tsx
- Dòng 36 - 40, bên trong TouachableOpacity

+ Go back
!Link to file: ../app/changePassword.tsx
- Dòng 40 - 47, bên trong thẻ View
