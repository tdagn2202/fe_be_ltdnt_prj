```!!!FOR BACK-END DEVELOPER - PHAM HUU HUNG```

```FUNCTIONALITY DOCUMENTATION```

Văn bản này liệt kê vị trí các phím chức năng của giao diện:


```1 - LOGIN PAGE: 2 buttons (CHỖ NÀY LÀ TÍNH NĂNG ĐĂNG NHẬP, TRUY VẤN DATABASE)```
```diff
1. Login:
!Link to code: ../app/index.tsx
- Dòng 38 - 42, nằm trong TouachableOpacity

2. Sign up for a free account
!Link to file: ../app/
- Dòng 55 - 59, nằm trong TouachableOpacity
```

```diff 2 - TABS
Sau khi click vào nút LOGIN, thì sẽ dẫn tới các files trong thư mục (tabs) (do dùng navigation nên cần chia riêng tụi nó ra một file). 

Trong đám đó, chỉ quan tâm tới file: user.tsx

Trong màn hình User, có các Buttons:
+ Account Setting:
!Link to file: ../app/(tabs)/user.tsx (link dẫn tới trang User (mục thứ 4 trong cái navigation á))
- Dòng 70 - 80, bên trong TouachableOpacity
-     | --> Change name
-     | --> Change avatar
+     | --> Change password (chỉ quan tâm button này)
!Link to file: ../app/userSetting.tsx
- Dòng 66 - 70, bên trong TouachableOpacity

+ Logout (đăng xuất về trang login)
!Link to file: ../app/(tabs)/user.tsx
- Dòng 94 - 98, bên trong TouachableOpacity
```

```diff 3 - CHANGE PASSWORD
Click vào Change password --> Changing password page
Trong màn hình changing password có 2 buttons: 

+ Change my password: 
!Link to file: ../app/changePassword.tsx
- Dòng 38 - 42, bên trong TouachableOpacity

+ Go back
!Link to file: ../app/changePassword.tsx
- Dòng 49 - 56, bên trong thẻ View
