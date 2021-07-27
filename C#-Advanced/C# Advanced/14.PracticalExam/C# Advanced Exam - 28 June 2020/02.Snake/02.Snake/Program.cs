using System;

namespace _02
{
    class Program
    {
        static void Main(string[] args)
        {
            int matrixSize = int.Parse(Console.ReadLine());
            char[,] matrix = new char[matrixSize, matrixSize];
            int startRow = -1;
            int startCol = -1;
            int foodQuantity = 0;

            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                string rowData = Console.ReadLine();
                for (int col = 0; col < matrix.GetLength(1); col++)
                {
                    matrix[row, col] = rowData[col];
                    if (matrix[row, col] == 'S')
                    {
                        startRow = row;
                        startCol = col;
                    }
                }
            }

            while (true)
            {
                matrix[startRow, startCol] = '.';
                string arg = Console.ReadLine();
                if (arg == "up")
                {
                    if (InBoundsMatrix(matrix, startRow - 1, startCol))
                    {
                        startRow--;
                    }
                    else
                    {
                        Console.WriteLine("Game over!");
                        break;
                    }
                }
                else if (arg == "down")
                {
                    if (InBoundsMatrix(matrix, startRow + 1, startCol))
                    {
                        startRow++;
                    }
                    else
                    {
                        Console.WriteLine("Game over!");
                        break;
                    }
                }
                else if (arg == "right")
                {
                    if (InBoundsMatrix(matrix, startRow, startCol + 1))
                    {
                        startCol++;
                    }
                    else
                    {
                        Console.WriteLine("Game over!");
                        break;
                    }
                }
                else if (arg == "left")
                {
                    if (InBoundsMatrix(matrix, startRow, startCol - 1))
                    {
                        startCol--;
                    }
                    else
                    {
                        Console.WriteLine("Game over!");
                        break;
                    }
                }
                if (matrix[startRow, startCol] == '*')
                {
                    foodQuantity++;
                    matrix[startRow, startCol] = 'S';
                    if (foodQuantity >= 10)
                    {
                        break;
                    }
                }
                if (matrix[startRow, startCol] == 'B')
                {
                    matrix[startRow, startCol] = '.';
                    for (int row = 0; row < matrix.GetLength(0); row++)
                    {
                        for (int col = 0; col < matrix.GetLength(1); col++)
                        {
                            if (matrix[row, col] == 'B')
                            {
                                startRow = row;
                                startCol = col;
                                break;
                            }
                        }
                    }
                }
                matrix[startRow, startCol] = 'S';
            }
            if (foodQuantity >= 10)
            {
                Console.WriteLine("You won! You fed the snake.");
            }
            Console.WriteLine($"Food eaten: {foodQuantity}");
            PrintMatrix(matrix);
        }

        public static bool InBoundsMatrix<T>(T[,] matrix, int row, int col)
        {
            bool isInBounds = false;
            if (0 <= row && row < matrix.GetLength(0) && 0 <= col && col < matrix.GetLength(1))
            {
                isInBounds = true;
            }
            return isInBounds;
        }
        public static void PrintMatrix<T>(T[,] matrix)
        {
            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                for (int col = 0; col < matrix.GetLength(1); col++)
                {
                    Console.Write(matrix[row, col]);
                }
                Console.WriteLine();
            }
        }
    }
}
