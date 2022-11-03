package stackoverflow.pre_project.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.exception.ex.BusinessApiException;
import stackoverflow.pre_project.exception.ex.BusinessException;
import stackoverflow.pre_project.exception.ex.BusinessValidationApiException;
import stackoverflow.pre_project.user.dto.UserProfileDto;
import stackoverflow.pre_project.user.entity.User;
import stackoverflow.pre_project.user.repository.UserRepository;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional(readOnly = true)
    public UserProfileDto profile(long id, long userId){//id는 본인, userId는 방문할페이지id
        UserProfileDto dto = new UserProfileDto();
        User Entity = userRepository.findById(userId).orElseThrow(() ->{
            throw new BusinessException("해당 유저를 찾을 수 없습니다.");});
        dto.setOwnerState(id == userId);
        dto.setUser(Entity);
        return dto;
    }

    @Transactional
    public User update(long id, User user, long userId){
        if(id != userId){
            throw new BusinessApiException("접근 방식이 잘못되었습니다.");
        }
        User userEntity = userRepository.findById(id).orElseThrow(() ->{
            throw new BusinessValidationApiException("해당 유저를 찾을 수 없습니다.");});
        userEntity.setUsername(user.getUsername());
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);

        userEntity.setPassword(encPassword);
        userEntity.setMessage(user.getMessage());
        return userEntity;
    }

    @Transactional(readOnly = true)
    public Page<User> pageList(Pageable pageable) {
        return userRepository.findAll(pageable);
    }
}
