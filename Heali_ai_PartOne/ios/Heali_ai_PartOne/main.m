#import <UIKit/UIKit.h>

#import "AppDelegate.h"

int main(int argc, char * argv[]) {
  @autoreleasepool {
    <SafeAreaView style={styles.itemsContainer}>
      <FoodItem />
    </SafeAreaView>    return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
  }
}
