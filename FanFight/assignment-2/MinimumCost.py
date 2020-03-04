import math


def find_minimum_cost(len_, array, count_):
    """
    This method splits the array into count_ non-empty consecutive sub-arrays
    and calculate the minimum cost using " i = 1k(max(i)^2−min(i)^2) ".
    :param len_: length of array
    :param array: array of integers
    :param count_: number of sub-arrays
    :return min_cost:
    author: kaustubh kane
    """

    arr_ = array[:]
    extra = int(len_ % count_)
    parts = int(len_ // count_)
    sub_arrays = []
    for i in range(0, int((len_ - extra) / parts)):
        tmp_arr = []
        for z in range(0, parts):
            tmp_arr.append(arr_.pop(0))
        sub_arrays.append(tmp_arr)
    if extra != 0:
        sub_arrays[(count_ - 1)].extend(arr_)
    sum_list = [(math.pow(max(i), 2) - math.pow(min(i), 2)) for i in sub_arrays]
    min_cost = sum(sum_list)
    return int(min_cost)


x = input("Enter array length and number of sub-arrays to create: ").split(" ")
y = list(map(int, input("\nEnter the array : ").strip().split()))[:int(x[0])]
result = find_minimum_cost(int(x[0]), y, int(x[1]))
print(result)
