while True:
    print('根据ID查询请输入1，根据姓名查询请输入2')
    answer = input('请输入：')
    if answer == '1':
        student_id = input('请输入学生的id：')
        flag = False
        for each in student_old:
            d = dict(eval(each))
            if d['id'] == student_id:
                print('ID\t\t姓名\t\t英语成绩\t\tPython成绩\t\tjava成绩')
                print(student_id, '\t', d['name'], '\t\t', d['english'], '\t\t', d['python'], '\t\t', d['java'])
                flag = True
                break
            else:
                continue
        if flag == False:
            print('没有这个学生！请重新选择！')
            continue
        else:
            continue
    else:
        student_name = input('请输入学生的姓名：')
        flag = False
        for each in student_old:
            d = dict(eval(each))
            if d['name'] == student_name:
                print('ID\t\t姓名\t\t英语成绩\t\tPython成绩\t\tjava成绩')
                print(d['id'], '\t', d['name'], '\t\t', d['english'], '\t\t', d['python'], '\t\t', d['java'])
                flag = True
                break
            else:
                continue
        if flag == False:
            print('没有这个学生！')
        else:
            continue
    answer = input('请问还需不需要查询？y/n')
    if answer == 'n':
        break